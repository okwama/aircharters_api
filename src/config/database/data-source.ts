import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || '102.130.125.52',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'impulsep_root',
  password: process.env.DB_PASSWORD || '@bo9511221.qwerty',
  database: process.env.DB_DATABASE || 'impulsep_air_charters',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
      synchronize: false, // Disabled to prevent schema conflicts
  logging: process.env.NODE_ENV === 'development',
  charset: 'utf8mb4',
  timezone: '+00:00',
  
  // Connection Pooling Optimizations
  extra: {
    // Connection pool settings
    connectionLimit: 20, // Increased from 10
    acquireTimeout: 60000,
    timeout: 60000,
    charset: 'utf8mb4_unicode_ci',
    
    // Lock timeout prevention
    lockWaitTimeout: 10, // 10 seconds (default is 50)  
    innodbLockWaitTimeout: 10, // 10 seconds
    
    // Transaction isolation and timeout settings
    transactionIsolation: 'READ_COMMITTED', // Prevents dirty reads, reduces lock conflicts
    autocommit: false, // Explicit transaction control
    
    // Query timeout settings
    queryTimeout: 30000, // 30 seconds
    connectTimeout: 60000, // 60 seconds
    
    // Connection management
    multipleStatements: false, // Security: prevent SQL injection
    dateStrings: true, // Better date handling
    
    // Performance optimizations
    supportBigNumbers: true,
    bigNumberStrings: true,
    
    // Deadlock prevention
    deadlockRetryCount: 3,
    deadlockRetryDelay: 1000, // 1 second
    
    // Connection health checks
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000, // 10 seconds
  },
  
      // TypeORM specific optimizations
    maxQueryExecutionTime: 30000, // Log slow queries > 30 seconds
    cache: {
      duration: 30000, // 30 seconds cache
    },
    
    // Migration settings
    migrationsRun: true,
    migrationsTableName: 'migrations',
});

export const getDataSource = (configService: ConfigService) => {
  return new DataSource({
    type: 'mysql',
    host: configService.get('DB_HOST', '102.130.125.52'),
    port: configService.get('DB_PORT', 3306),
    username: configService.get('DB_USERNAME', 'impulsep_root'),
    password: configService.get('DB_PASSWORD', '@bo9511221.qwerty'),
    database: configService.get('DB_DATABASE', 'impulsep_air_charters'),
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/database/migrations/*{.ts,.js}'],
    synchronize: false, // Disabled to prevent schema conflicts
    logging: configService.get('NODE_ENV') === 'development',
    charset: 'utf8mb4',
    timezone: '+00:00', 
    
    // Connection Pooling Optimizations
    extra: {
      // Connection pool settings
      connectionLimit: 20, // Increased from 10
      acquireTimeout: 60000,
      timeout: 60000,
      charset: 'utf8mb4_unicode_ci',
      
      // Lock timeout prevention
      lockWaitTimeout: 10, // 10 seconds (default is 50)
      innodbLockWaitTimeout: 10, // 10 seconds
      
      // Transaction isolation and timeout settings
      transactionIsolation: 'READ_COMMITTED', // Prevents dirty reads, reduces lock conflicts
      autocommit: false, // Explicit transaction control
      
      // Query timeout settings
      queryTimeout: 30000, // 30 seconds
      connectTimeout: 60000, // 60 seconds
      
      // Connection management
      multipleStatements: false, // Security: prevent SQL injection
      dateStrings: true, // Better date handling
      
      // Performance optimizations
      supportBigNumbers: true,
      bigNumberStrings: true,
      
      // Deadlock prevention
      deadlockRetryCount: 3,
      deadlockRetryDelay: 1000, // 1 second
      
      // Connection health checks
      enableKeepAlive: true,
      keepAliveInitialDelay: 10000, // 10 seconds
    },
    
    // TypeORM specific optimizations
    maxQueryExecutionTime: 30000, // Log slow queries > 30 seconds
    cache: {
      duration: 30000, // 30 seconds cache
    },
    
    // Migration settings
    migrationsRun: true,
    migrationsTableName: 'migrations',
  });
}; 