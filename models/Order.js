import { Model } from 'objection';

// TODO: consider renaming table names to be singular
class Order extends Model {
  static get tableName() {
    return "orders";
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.date_purchased = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default Order;