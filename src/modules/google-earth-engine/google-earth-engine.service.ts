import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { GoogleEarthEngineSearchDto, GoogleEarthEngineReverseGeocodeDto, GoogleEarthEngineDistanceDto, GoogleEarthEngineLocationDto } from './dto/google-earth-engine.dto';

@Injectable()
export class GoogleEarthEngineService {
  private readonly apiKey: string;
  private readonly baseUrl = 'https://maps.googleapis.com/maps/api';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = this.configService.get<string>('GOOGLE_MAPS_API_KEY');
  }

  async searchLocations(searchDto: GoogleEarthEngineSearchDto): Promise<GoogleEarthEngineLocationDto[]> {
    if (!this.apiKey) {
      throw new HttpException('Google Maps API key not configured', HttpStatus.SERVICE_UNAVAILABLE);
    }

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/place/textsearch/json`, {
          params: {
            query: searchDto.query,
            key: this.apiKey,
            type: searchDto.type || 'establishment',
            location: searchDto.location,
            radius: searchDto.radius || 2000000, // 2000km default for air travel
          },
        })
      );

      // Handle different API response statuses gracefully
      if (response.data.status === 'ZERO_RESULTS') {
        // Return empty array instead of throwing error for no results
        return [];
      }

      if (response.data.status !== 'OK') {
        throw new HttpException(`Google Places API error: ${response.data.status}`, HttpStatus.BAD_REQUEST);
      }

      return response.data.results.map(place => ({
        placeId: place.place_id,
        name: place.name,
        formattedAddress: place.formatted_address,
        location: {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
        },
        types: place.types,
        rating: place.rating,
        userRatingsTotal: place.user_ratings_total,
      }));
    } catch (error) {
      throw new HttpException(`Location search failed: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getPlaceDetails(placeId: string): Promise<GoogleEarthEngineLocationDto> {
    if (!this.apiKey) {
      throw new HttpException('Google Maps API key not configured', HttpStatus.SERVICE_UNAVAILABLE);
    }

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/place/details/json`, {
          params: {
            place_id: placeId,
            key: this.apiKey,
            fields: 'place_id,name,formatted_address,geometry,types,rating,user_ratings_total',
          },
        })
      );

      if (response.data.status !== 'OK') {
        throw new HttpException(`Google Places API error: ${response.data.status}`, HttpStatus.BAD_REQUEST);
      }

      const place = response.data.result;
      return {
        placeId: place.place_id,
        name: place.name,
        formattedAddress: place.formatted_address,
        location: {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
        },
        types: place.types,
        rating: place.rating,
        userRatingsTotal: place.user_ratings_total,
      };
    } catch (error) {
      throw new HttpException(`Place details failed: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async reverseGeocode(reverseGeocodeDto: GoogleEarthEngineReverseGeocodeDto): Promise<GoogleEarthEngineLocationDto> {
    if (!this.apiKey) {
      throw new HttpException('Google Maps API key not configured', HttpStatus.SERVICE_UNAVAILABLE);
    }

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/geocode/json`, {
          params: {
            latlng: `${reverseGeocodeDto.latitude},${reverseGeocodeDto.longitude}`,
            key: this.apiKey,
          },
        })
      );

      if (response.data.status !== 'OK') {
        throw new HttpException(`Google Geocoding API error: ${response.data.status}`, HttpStatus.BAD_REQUEST);
      }

      const result = response.data.results[0];
      return {
        placeId: result.place_id,
        name: this.extractLocationName(result),
        formattedAddress: result.formatted_address,
        location: {
          lat: reverseGeocodeDto.latitude,
          lng: reverseGeocodeDto.longitude,
        },
        types: result.types,
      };
    } catch (error) {
      throw new HttpException(`Reverse geocoding failed: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async calculateDistance(distanceDto: GoogleEarthEngineDistanceDto): Promise<any> {
    if (!this.apiKey) {
      throw new HttpException('Google Maps API key not configured', HttpStatus.SERVICE_UNAVAILABLE);
    }

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/distancematrix/json`, {
          params: {
            origins: `${distanceDto.origin.lat},${distanceDto.origin.lng}`,
            destinations: `${distanceDto.destination.lat},${distanceDto.destination.lng}`,
            key: this.apiKey,
            mode: distanceDto.mode || 'driving',
            units: 'metric',
          },
        })
      );

      if (response.data.status !== 'OK') {
        throw new HttpException(`Google Distance Matrix API error: ${response.data.status}`, HttpStatus.BAD_REQUEST);
      }

      const element = response.data.rows[0].elements[0];
      return {
        distance: element.distance,
        duration: element.duration,
        status: element.status,
      };
    } catch (error) {
      throw new HttpException(`Distance calculation failed: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  calculateFlightDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  estimateFlightDuration(distance: number, aircraftType: string = 'jet'): number {
    // Average speeds in km/h for different aircraft types
    const speeds = {
      jet: 800,
      turboprop: 500,
      helicopter: 250,
      small: 300,
    };

    const speed = speeds[aircraftType] || speeds.jet;
    return (distance / speed) * 3600; // Return duration in seconds
  }

  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  private extractLocationName(result: any): string {
    // Try to extract the most relevant name from address components
    const components = result.address_components;
    const nameComponent = components.find(comp => 
      comp.types.includes('establishment') || 
      comp.types.includes('point_of_interest') ||
      comp.types.includes('airport')
    );
    
    return nameComponent ? nameComponent.long_name : result.formatted_address;
  }
} 