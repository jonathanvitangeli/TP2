import Role from "./Role.js";
import User from "./User.js";
import Service from "./Service.js";
import Turn from "./Turn.js";

// Relaciones
Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(Turn, { as: "BarberTurns", foreignKey: "barberId" });
User.hasMany(Turn, { as: "ClientTurns", foreignKey: "clientId" });

Turn.belongsTo(User, { as: "Barber", foreignKey: "barberId" });
Turn.belongsTo(User, { as: "Client", foreignKey: "clientId" });

Service.hasMany(Turn);
Turn.belongsTo(Service);

export { Role, User, Service, Turn };
