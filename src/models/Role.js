import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class Role extends Model {}

Role.init(
  {
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: "Role",
  }
);

export default Role;
