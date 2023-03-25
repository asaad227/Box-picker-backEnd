// import pkg from 'mongodb';
// const {MongoClient} = pkg;
// const connectionString = process.env.MONGODB_URI;
// const client = new MongoClient(connectionString,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let dbConnection;

// async function connectToServer(callback) {
//   const result = await client.connect(function (err, db) {
//     if (err || !db) {
//       return callback(err);
//     }

//     dbConnection = db.db(process.env.MONGODB_DATABASE);
//     console.log('Successfully connected to MongoDB.');

//     return callback();
//   });

//   return result;
// }
// export async function getDb() {
//   return await dbConnection;
// }



import { MongoClient } from 'mongodb';
const uri = process.env.MONGODB_URI;

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log(err);
    return;
  }

  const db = client.db(process.env.MONGODB_DATABASE);

  return db;

  // Perform CRUD operations on the database
});
