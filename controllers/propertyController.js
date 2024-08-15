
const data = require("../data/data.json"); 

exports.getProperties = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  if (page < 1 || limit < 1) {
    return res.status(400).json({ message: "Invalid page or limit" });
  }

  if (startIndex >= data.length) {
    return res.status(404).json({ message: "No more data available" });
  }

  const result = data.slice(startIndex, endIndex);

  res.json(result);
};
