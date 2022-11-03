import dotenv from 'dotenv';
import connectDb from '../db-conn.js';
import server from './app.js';

dotenv.config({path: './.env'})
connectDb();

const port = process.env.PORT || 5000;
server.listen(
    port,
    console.log(`Dev Server running on port ${port}`)
);
