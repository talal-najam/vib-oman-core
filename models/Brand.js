import { Model } from 'objection';

class Brand extends Model {
  static get tableName() {
    return "brands";
  }
}

export default Brand;