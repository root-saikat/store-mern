import mongoose from 'mongoose';

const connectToMongo = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Connected To MongoDB on host: ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error in MongoDB: ${error}`);
    }
};


export default connectToMongo;