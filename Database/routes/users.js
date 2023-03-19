import express from 'express';
import "dotenv/config";
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
import { getDb } from '../db/conn.js';

// This function will get a list of all the records.
recordRoutes.get('/game', async function (req, res) {
  const dbConnect = await getDb();
  await dbConnect
    .collection(process.env.MONGODB_COLLECTION)
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching game!');
      } else {
        res.json({
          success: true,
          payload: result,
        });
      }
    });
});

recordRoutes.post('/game', async (req, res) => {
  const dbConnect = await getDb();
  const result = await dbConnect
    .collection(process.env.MONGODB_COLLECTION)
    .insertOne(req.body);

  console.log(
    `newListing has been created with following id: ${result.insertedId}`
  );

  res.json({
    success: true,
    payload: result,
  });
});

export default recordRoutes;
