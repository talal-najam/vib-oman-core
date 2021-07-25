import { Model } from "objection";
import bcrypt from "bcryptjs";
import Product from "./Product";

class User extends Model {
  static get tableName() {
    return "users";
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static relationMappings = {
    orders: {
      relation: Model.ManyToManyRelation,
      modelClass: Product,
    },
  };

  passwordsMatch(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

export default User;
