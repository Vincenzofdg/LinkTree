"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class logins extends Model {
    static associate(models) {
      // define association here
    }
  }
  logins.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "login",
      // timestamps: true,
      updatedAt: false,
      createdAt: "created",
    }
  );
  return logins;
};
