const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');


const validarJWT = async( req = request, res = response, next ) => {

    const token = req.header( 'x-token' );
    if( !token ){
        return res.status(401).json({
            msg: 'faltante de token'
        });
    }

    try {

        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        const usuario = await Usuario.findById( uid );
        if(!usuario){
            return res.status(401).json({
                msg: 'No existe usuario en DB - invalid token'
            })
        }
        if(!usuario.estado){
            return res.status(401).json({
                msg: 'Invalid token - usuario estado false'
            })
        }

        req.usuario = usuario;
        next();

    } catch( error ){

        console.log(error);
        return res.status(401).json({
            msg: 'Invalid token'
        });
    }
}


module.exports = {
    validarJWT
}