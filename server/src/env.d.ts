declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    REDIS_URL: string;
    PORT: string;
    SESSION_SECRET: string;
    CORS_ORIGIN: string;
    DO_ENDPOINT: string;
    DO_ACCESS_KEY_ID: string;
    DO_SECRET_ACCESS_KEY: string;
  }
}