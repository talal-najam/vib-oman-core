import { Model } from 'objection';

class Brand extends Model {
  static get tableName() {
    return "brands";
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default Brand;