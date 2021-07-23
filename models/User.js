import { Model } from 'objection';

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

export default User;