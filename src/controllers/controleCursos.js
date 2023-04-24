const cursosModel = require('../models/cursosmodel');

const getAll = async (_req, res) => {

    const cursos = await cursosModel.getAll();

    return res.status(200).json(cursos);

};

const criarCurso = async (req, res) => {

    const cursoCriado = await cursosModel.criarCurso(req.body);
    return res.status(201).json(cursoCriado);
  
};

const cursoDeletado = async (req, res) => {
    const {id} = req.params;

    await cursosModel.deleteCurso(id);
    return res.status(204).json();
};

const updateCurso= async (req,res) => {
    
    const { id } = req.params;

    await cursosModel.updateCurso(id,req.body);
    return res.status(204).json();
};

module.exports = {
    getAll,
    criarCurso,
    cursoDeletado,
    updateCurso,
};