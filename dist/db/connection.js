"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
let config;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    config = { connectionString: process.env.DATABASE_URL, ssl: true };
}
else {
    config = {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        port: 8000,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DB
    };
}
exports.pool = new pg_1.Pool(config);
//# sourceMappingURL=connection.js.map