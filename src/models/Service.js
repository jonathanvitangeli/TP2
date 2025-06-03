import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class Service extends Model {}

Service.init({
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: "Service"
});

export default Service;
