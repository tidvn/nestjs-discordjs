// Set server timezone
if (!process.env.TZ) {
  process.env.TZ = 'UTC';
}

export const TIMEZONE = process.env.TZ;

// Environment
export const NODE_ENV: string = process.env.NODE_ENV || 'development';

// Server config
export const PORT: number = parseInt(process.env.PORT, 10) || 8080;
export const CONTEXT_PATH: string = process.env.CONTEXT_PATH || '/api';

// Swagger config
export const SWAGGER_ENDPOINT = process.env.SWAGGER_ENDPOINT || 'docs';

// // Database connection
// export const DATABASE_HOST: string = process.env.DATABASE_HOST || 'localhost';
// export const DATABASE_PORT: number =
//   parseInt(process.env.DATABASE_PORT, 10) || 5432;
// export const DATABASE_USER: string = process.env.DATABASE_USER || 'postgres';
// export const DATABASE_PASSWORD: string =
//   process.env.DATABASE_PASSWORD || 'postgres';
// export const DATABASE_NAME: string = process.env.DATABASE_NAME || 'postgres';

export const LOGGING_CONSOLE_LEVEL =
  process.env.LOGGING_CONSOLE_LEVEL || 'debug';
export const LOGGING_FILE_LEVEL = process.env.LOGGING_FILE_LEVEL || 'silent'; // Silent level mean no logging

export const LOG_FILE_PATH = process.env.LOG_FILE_PATH || './logger.log';

export const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN || '';
