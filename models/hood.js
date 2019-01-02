'use strict';
module.exports = (sequelize, DataTypes) => {
  const hood = sequelize.define('hood', {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    photo: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  hood.associate = function(models) {
    // associations can be defined here
  };
  return hood;
};