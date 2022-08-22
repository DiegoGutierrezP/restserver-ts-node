"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node_curso', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    //logging:false,//veremos to el sql en la consola
    port: 3308
});
exports.default = db;
//# sourceMappingURL=connection.js.map