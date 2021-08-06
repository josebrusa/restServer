
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { esRoleValido, correoExiste, existeUsuarioPorId } = require('../helpers/db-validators')
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios')


const router = Router();
router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    check('rol').custom( esRoleValido ),
    validarCampos
], usuariosPut);

router.post('/',[
    check('nombre', 'Nombre obligatorio').not().isEmpty(),
    check('password', 'El password debe contener 6 caracteres').isLength({ min: 6 }),
    check('correo', 'Correo no valido').isEmail(),
    check('correo').custom( correoExiste ),
    // check('rol', 'Debe ser un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( esRoleValido ),
    validarCampos
], usuariosPost);

router.delete('/:id',[
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);





module.exports = router;