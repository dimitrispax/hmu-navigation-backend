// import { Client } from 'pg';

// /* Connecting to the database using the needed credentials. */
// export const client = new Client({

//     // /* Connection Setting if you are using localhost. */
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "root",
//     database: "hmu"
// });

import { Pool } from 'pg';


let config;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    config = { connectionString: process.env.DATABASE_URL, ssl: true };
} else {
    config = {
        host: "147.95.40.107",
        user: "postgres",
        port: 8000,
        password: "root",
        database: "hmu"
    };
}
export const pool = new Pool(config);