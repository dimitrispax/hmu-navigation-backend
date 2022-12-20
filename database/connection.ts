import { Client } from 'pg';

/* Connecting to the database using the needed credentials. */
export const client = new Client({
    /* Connection Setting if you are using localhost. */
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "root",
    database: "mrbs_database"

});


