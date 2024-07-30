require("dotenv").config(); // Load environment variables

const mongoose = require("mongoose");
const User = require("./src/model/user.model");

async function dropAllIndexes() {
  try {
    const userCollection = mongoose.connection.collection("users");
    await userCollection.dropIndexes(); // Drop all indexes
    console.log("All indexes dropped.");
  } catch (error) {
    console.error("Error dropping indexes:", error.message);
  }
}

// Connect to MongoDB and execute functions
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Database connected");
    return dropAllIndexes();
  })
  .catch((error) => console.error("Database connection error:", error.message))
  .finally(() => mongoose.disconnect());
