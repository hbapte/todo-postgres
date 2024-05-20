import { Pool } from 'pg'
import dotenv from 'dotenv'

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ToDo',
    password: process.env.DB_PASSWORD,
    port: 5432,
})   

export default pool;