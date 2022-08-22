import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const getUsuarios = async (req : Request, res : Response) => {

    const usuarios = await Usuario.findAll();

    res.json({usuarios})
};  

export const getUsuario = async (req : Request, res : Response) => {
    const {id} = req.params;

    const usuario = await Usuario.findByPk(id)

    if(!usuario){
        return res.status(400).json({
            msg:'El usuario no existe en la bd'
        })
    }

    res.json({
        usuario
    })
};

export const postUsuario = async (req : Request, res : Response) => {
    const { body } = req;

    try{

        const userExist = await Usuario.findOne({where:{email:body.email}});

        if(userExist){
            return res.status(400).json({
                msg:'El email ya esta registrado'
            })
        }

        const usuario = new Usuario(body);
        await usuario.save();

        res.json({
            usuario
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            msg:"Hable con el administrador"
        })
    }
    
};

export const putUsuario = async (req : Request, res : Response) => {

    const {id} = req.params;
    const {body} = req;

    try{

        const usuario = await Usuario.findByPk(id);

        if(!usuario){
            return res.status(404).json({
                msg:'No existe un usuario con ese id'
            })
        }

        await usuario.update(body);

        res.json({
            usuario
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            msg:"Hable con el administrador"
        })
    }
};

export const deleteUsuario = async (req : Request, res : Response) => {
    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);

    if(!usuario){
        return res.status(404).json({
            msg:'No existe un usuario con ese id'
        })
    }

    //elminaccion fisica
    //await usuario.destroy();

    await usuario.update({estado:false});

    res.json({
        msg:'usuario borrado'
    })
};