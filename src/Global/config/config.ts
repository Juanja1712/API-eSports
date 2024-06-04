export default () => ({
  database: {
    type: process.env.DATABASE_TYPE || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME || 'juan',
    password: process.env.DATABASE_PASSWORD || 'juan123',
    db: process.env.DATABASE_DB || 'postgres',
  },
});
