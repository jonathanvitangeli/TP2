import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";
import Client from "./Client.js";
import Barber from "./Barber.js";
import Service from "./Service.js";

class Turn extends Model {}

Turn.init({
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: "Turn"
});

// Relaciones
Turn.belongsTo(Client, { foreignKey: 'client_id', targetKey: 'id' });
Client.hasMany(Turn, { foreignKey: 'client_id' });

Turn.belongsTo(Barber, { foreignKey: 'barber_id', targetKey: 'id' });
Barber.hasMany(Turn, { foreignKey: 'barber_id' });

Turn.belongsTo(Service, { foreignKey: 'service_id', targetKey: 'id' });
Service.hasMany(Turn, { foreignKey: 'service_id' });

export default Turn;
