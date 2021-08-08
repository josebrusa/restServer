const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');

const Usuario = require('../models/usuario');



const login = async(req, res = response) => {

    const { correo, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ correo });
        if(!usuario){
            return res.status(400).json({ 
                msg: 'Usuario/Correo incorrecto'
            });
        }

        if(!usuario.estado){
            return res.status(400).json({
                msg: 'Usuario/correo estado-false'
            });
        }

        const validPassword = bcryptjs.compareSync( password, usuario.password );
        if(!validPassword){
            return res.status(400).json({
                msg: 'Usuario/password incorrect'
            })
        }

        const token = await generarJWT( usuario.id );

        res.json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'comuniquese con el administrador'
        });
    }
}

module.exports = {
    login
}

