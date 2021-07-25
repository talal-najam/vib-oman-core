import { Model } from 'objection';

class Product extends Model {
  static get tableName() {
    return "products";
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default Product;