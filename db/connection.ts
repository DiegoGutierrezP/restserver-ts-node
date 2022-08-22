import {Sequelize} from 'sequelize'

const db = new Sequelize('node_curso','root','root',{
    host:'127.0.0.1',
    dialect:'mysql',
    //logging:false,//veremos to el sql en la consola
    port:3308
});

export default db;