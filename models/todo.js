'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    name: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN
  }, {});
  ToDo.associate = function(models) {
    // associations can be defined here
    ToDo.belongsTo(models.User)
  };
  return ToDo;
};