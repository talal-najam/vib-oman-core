import { Model } from 'objection';
import bcrypt from 'bcryptjs'
import Product from './Product';

class Order extends Model {
  static get tableName() {
    return "orders";
  }

  static relationMappings = {
    orders: {
      relation: Model.ManyToManyRelation,
      modelClass: Product
    }
  }

  passwordsMatch (password) {
    return bcrypt.compareSync(password, this.password)
  }
}

export default Order;