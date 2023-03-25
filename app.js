// Loads the configuration from config.env to process
// make sure dotenv/config not dotenv/config.js
import "dotenv/config";
import express from 'express';
import cors from 'cors';
// get MongoDB driver connection
import { connectToServer } from './get_leaderboard/get_leaderboard.js';
import recordRoutes from './routes/users.js';

const PORT = process.env.PORT|| 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', recordRoutes);

// Global error handling
app.use(function (err, req, res) {
  console.error(err.stack);
  res.json({
    error: true,
  });
});

// perform a database connection when the server starts
connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }
});
// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


export default app;