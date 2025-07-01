import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class Turn extends Model {}

Turn.init(
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Turn",
  }
);

export default Turn;
