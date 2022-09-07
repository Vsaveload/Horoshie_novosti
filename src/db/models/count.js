const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Count extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.Tag, { foreignKey: 'tag_id' });
    }
  }
  Count.init({
    user_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER,
    isgood: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Count',
  });
  return Count;
};
