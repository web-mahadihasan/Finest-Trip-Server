require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@finesttrip.dsyoy.mongodb.net/?retryWrites=true&w=majority&appName=FinestTrip`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  const connectToDatabase = async () => {
    try {
        // await client.connect()

        // database connection check 
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
  };

module.exports = {client, connectToDatabase};