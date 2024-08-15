const express = require("express");
const PropertyController = require("../controllers/propertyController");

const router = express.Router();

router.get("/properties", PropertyController.getProperties);

module.exports = router;
