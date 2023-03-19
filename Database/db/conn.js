import pkg from 'mongodb';
const {MongoClient} = pkg;
const connectionString = process.env.ATLAS_URI
const client = new MongoClient(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;
export async function connectToServer(callback) {

	const result = await client.connect((err, db)=>{
        if(err || !db){
            return callback(err)
        }

        dbConnection = db.db("game");

        console.log("Successfully connected to mongoDb.");

        return callback()

    })

    return result;
}

export async function getDb(){
    return await dbConnection;
}