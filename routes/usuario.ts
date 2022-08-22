
import {Router} from 'express';
import { check } from 'express-validator';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuarios.controller';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();


router.get('/',getUsuarios);

router.get('/:id',getUsuario);

router.post('/',[
    check('nombre','el campo nombre es requerido').not().isEmpty(),
    check('email','el campo email es requerido').not().isEmpty(),
    check('email','debe ser un email').isEmail(),
    validarCampos
],postUsuario);

router.put('/:id',[
    check('id','el campo id es requerido').not().isEmpty(),
    check('email').optional().isEmail(),
    validarCampos
],putUsuario);

router.delete('/:id',deleteUsuario);


export default router;
