const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static relationMappings = {
    products: {
      relation: Model.ManyToManyRelation,
      modelClass: Product
    }
  }
}

module.exports = {
  User,
};
