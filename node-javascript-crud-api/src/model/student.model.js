const Model = require('./index');

class Student extends Model {
  static get tableName() {
    return 'students';
  }
  static get idColumn() {
    return 'id';
  }
}

module.exports = Student;
