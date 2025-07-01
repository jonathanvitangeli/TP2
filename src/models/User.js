import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class User extends Model {
  static compare = async (plainPassword, hash) => {
    return await bcrypt.compare(plainPassword, hash);
  };
}

User.init(
  {
    name: DataTypes.STRING,
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RoleId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.pass, salt);
  user.pass = hash;
});

export default User;
