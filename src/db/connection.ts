import { Pool, PoolConfig } from 'pg';


let config: PoolConfig | undefined;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    config = { connectionString: process.env.DATABASE_URL, ssl: true };
} else {
    config = {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        port: 8000,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DB
    };
}
export const pool = new Pool(config);