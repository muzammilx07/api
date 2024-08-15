const express = require("express");
const PropertyController = require("../controllers/propertyController");

const router = express.Router();

router.get("/properties", PropertyController.getAllProperties);
router.get("/properties/:city", PropertyController.getPropertiesByCity);

module.exports = router;
