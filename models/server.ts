import express,{Application} from 'express';
import cors from 'cors';
//import * as userRoutes from '../routes/usuario';//si tuvieramos varias exports
import userRoutes from '../routes/usuario';
import db from '../db/connection';

class Server{

    private app: Application;//para saber de que tipo es
    private port: string | undefined;
    private apiPaths = {
        usuarios:'/api/usuarios',
    }

    constructor(){
        this.app= express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();

        this.middlewares();//debe estar antes del routes

        this.routes();
        
    }

    async dbConnection(){
        try{
            await db.authenticate();
            console.log('Database online')
        }catch(error : any){
            throw new Error( error );
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors())
        //lectura body
        this.app.use( express.json() );
        //carpeta publica
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios,userRoutes)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto!! '+ this.port);
        })
    }
}

export default Server;