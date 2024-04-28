const models = require("../database/models");

module.exports = {
  getAll: async () => {
    const users = await models.login.findAll({
      attributes: { exclude: ["created"] },
    });
    return users;
  },
};
