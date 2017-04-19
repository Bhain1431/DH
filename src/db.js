
import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI || 'mongodb://comanjo:babybrad1431@ds163360.mlab.com:63360/mydb';

const connect = async () => await MongoClient.connect(mongoUri);

export default connect;

export const collection = async (collection) => {
    const db = await connect();
    return db.collection(collection);
};

