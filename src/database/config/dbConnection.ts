import { Pool } from 'pg'

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ToDo',
    password: '2001huye',
    port: 5432,
})   

export default pool;