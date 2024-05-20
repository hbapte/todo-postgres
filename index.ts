import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './src/routers';
import db from './src/database/models/index';  // Import your database module

const app = express();  

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Router
app.use('/api', router);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to TODO APP Server with PostgreSQL and Sequelize 🚀!');
});

// Synchronize the database and start the server
const startServer = async () => {
  try {
    await db.sequelize.sync();
    console.log('Database synchronized');

    app.listen(5000, () => {
      console.log('Server is running on http://localhost:5000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
