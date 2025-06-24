import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Service extends Model {}

Service.init(
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER, // minutos
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Service",
  }
);

export default Service;
