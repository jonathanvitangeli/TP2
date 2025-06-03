import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";
import Person from "./Person.js";

class Barber extends Model {}

Barber.init({
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: "Barber"
});

Barber.belongsTo(Person, { foreignKey: 'person_id', targetKey: 'id' });
Person.hasOne(Barber, { foreignKey: 'person_id' });

export default Barber;
