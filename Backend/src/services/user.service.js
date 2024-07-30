const User = require("../model/user.model");

module.exports = class userServices {
  // ADD USER
  async addNewUser(body) {
    try {
      return await User.create(body);
    } catch (error) {
      console.log("Error adding user:", error);
      throw error;
    }
  }

  // Get Single User
  async getUser(body) {
    try {
      return await User.findOne(body);
    } catch (error) {
      console.log("Error retrieving user:", error);
      throw error;
    }
  }
};
