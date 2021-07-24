import { Model } from "objection";

class Category extends Model {
  static get tableName() {
    return "categories";
  }
}

export default Category;
