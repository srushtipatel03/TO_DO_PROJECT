require("dotenv").config(); // Load environment variables

const mongoose = require("mongoose");

async function createIndexes() {
  try {
    const userCollection = mongoose.connection.collection("users");
    await userCollection.createIndex({ email: 1 }, { unique: true });
    console.log("Unique index on email created.");
  } catch (error) {
    console.error("Error creating index:", error.message);
  }
}

// Connect to MongoDB and execute functions
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Database connected");
    return createIndexes();
  })
  .catch((error) => console.error("Database connection error:", error.message))
  .finally(() => mongoose.disconnect());
