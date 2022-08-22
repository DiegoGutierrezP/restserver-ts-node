"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', usuarios_controller_1.getUsuarios);
router.get('/:id', usuarios_controller_1.getUsuario);
router.post('/', [
    (0, express_validator_1.check)('nombre', 'el campo nombre es requerido').not().isEmpty(),
    (0, express_validator_1.check)('email', 'el campo email es requerido').not().isEmpty(),
    (0, express_validator_1.check)('email', 'debe ser un email').isEmail(),
    validar_campos_1.validarCampos
], usuarios_controller_1.postUsuario);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'el campo id es requerido').not().isEmpty(),
    (0, express_validator_1.check)('email').optional().isEmail(),
    validar_campos_1.validarCampos
], usuarios_controller_1.putUsuario);
router.delete('/:id', usuarios_controller_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map