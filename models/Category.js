import { Model } from "objection";

class Category extends Model {
  static get tableName() {
    return "categories";
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default Category;
