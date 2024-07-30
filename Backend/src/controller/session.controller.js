const sessionService = require("../services/session.service");

exports.getSessions = async (req, res) => {
  try {
    const sessions = await sessionService.getSessions(req.user.id);
    res.status(200).json({ sessions });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
