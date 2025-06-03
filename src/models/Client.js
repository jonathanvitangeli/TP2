import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";
import Person from "./Person.js";

class Client extends Model {}

Client.init({}, {
  sequelize: connection,
  modelName: "Client"
});

Client.belongsTo(Person, { foreignKey: 'person_id', targetKey: 'id' });
Person.hasOne(Client, { foreignKey: 'person_id' });

export default Client;
