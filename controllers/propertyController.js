const PropertyModel = require("../models/propertyModel");

class PropertyController {
  static getAllProperties(req, res) {
    const properties = PropertyModel.getAllProperties();
    res.json(properties);
  }

  static getPropertiesByCity(req, res) {
    const city = req.params.city;
    const properties = PropertyModel.getPropertyByCity(city);
    if (properties.length > 0) {
      res.json(properties);
    } else {
      res.status(404).json({ message: "No properties found in this city" });
    }
  }
}

module.exports = PropertyController;
