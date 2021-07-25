import { Model } from 'objection';

class Order extends Model {
  static get tableName() {
    return "orders";
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default Order;