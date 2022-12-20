"use strict";
// import { Client } from 'pg';
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
// /* Connecting to the database using the needed credentials. */
// export const client = new Client({
//     // /* Connection Setting if you are using localhost. */
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "root",
//     database: "hmu"
// });
const pg_1 = require("pg");
let config;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    config = { connectionString: process.env.DATABASE_URL, ssl: true };
}
else {
    config = {
        host: "147.95.40.107",
        user: "postgres",
        port: 8000,
        password: "root",
        database: "hmu"
    };
}
exports.pool = new pg_1.Pool(config);
//# sourceMappingURL=connection.js.map