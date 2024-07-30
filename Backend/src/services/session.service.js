const Session = require("../model/session.model");

exports.recordSession = async (userId, ipAddress) => {
  const session = new Session({ userId, ipAddress });
  await session.save();
  return session;
};

exports.getSessions = async (userId) => {
  return Session.find({ userId });
};
