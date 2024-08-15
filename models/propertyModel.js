const properties = require("../data/data.json");

class PropertyModel {
  static getAllProperties() {
    return properties;
  }

  static getPropertyByCity(city) {
    return properties.filter(
      (property) => property.city.toLowerCase() === city.toLowerCase()
    );
  }
}

module.exports = PropertyModel;
