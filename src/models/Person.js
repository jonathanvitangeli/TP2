import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class Person extends Model {}

Person.init(
  {
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Person",
  }
);

export default Person;
