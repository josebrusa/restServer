const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'no name', apikey, limit, page = '1' } = req.query;

    res.json({
        msg: 'get API - usuariosGet',
        q,
        nombre,
        apikey,
        limit,
        page
    })
}

const usuariosPost = (req, res = response) => {

    const { id, nombre, apellido, edad } = req.body;

    res.json({
        // msg: `EL usario ${id} muestra la info ${nombre} ${apellido} de edad: ${edad} años`,
        msg: 'post API - usuariosPost',
        id,
        nombre,
        apellido,
        edad
    })
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;
    res.json({
        msg: 'put API - usuariosPut',
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    })
}




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}