import mongoose from 'mongoose';

const mongoURL = "mongodb://127.0.0.1:27017/";

const connectToMongo = () => {
    mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
  
    const db = mongoose.connection;
  
    db.on('error', (error) => {
      console.error("Connection error:", error);
      console.log("Not connected to MongoDB");
    });
  
    db.once('open', () => {
      console.log("Connected to MongoDB");
    });
};
  


export default connectToMongo;