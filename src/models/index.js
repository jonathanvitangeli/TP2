import Role from "./Role.js";
import User from "./User.js";
import Service from "./Service.js";
import Turn from "./Turn.js";

// Relaciones
Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(Turn, { foreignKey: "userId" });
Turn.belongsTo(User, { foreignKey: "userId" });

Service.hasMany(Turn);
Turn.belongsTo(Service);


export { Role, User, Service, Turn };
