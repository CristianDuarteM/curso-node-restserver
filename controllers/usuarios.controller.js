const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = "No name", api, page = 1, limit} = req.query;

    res.json({
        msg: "get API - Controlador",
        q,
        nombre,
        api,
        page,
        limit
    });
};

const usuarioPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    res.status(201).json({
        msg: "post API - Controlador",
        nombre,
        edad
    });
};

const usuarioPut = (req, res = response) => {

    //const id = req.params.id;
    const {id} = req.params;

    res.status(201).json({
        msg: "put API - Controlador",
        id
    });
};

const usuarioPatch = (req, res = response) => {
    res.status(201).json({
        msg: "patch API - Controlador"
    });
};

const usuarioDelete = (req, res = response) => {
    res.status(201).json({
        msg: "delete API - Controlador"
    });
};

module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}