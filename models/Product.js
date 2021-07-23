import { Model } from 'objection';

class Product extends Model {
  static get tableName() {
    return "products";
  }
}

export default Product;