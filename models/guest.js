'use strict';
module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define('Guest', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    antend: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Guest;
};
