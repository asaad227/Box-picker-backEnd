// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import pkg from 'mongodb';
const {MongoClient} = pkg;
const connectionString = process.env.MONGODB_URI;
const client = new MongoClient(connectionString,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

const handler = async () => {
  async function connectToServer(callback) {
    const result = await client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }
  
      dbConnection = db.db(process.env.MONGODB_DATABASE);
      console.log('Successfully connected to MongoDB.');
  
      return callback();
    });
  
    return result;
  }
  const dbConnect = dbConnection;
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
  connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
  });
}

export default handler;

