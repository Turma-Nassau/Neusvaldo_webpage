const express = require('express');

const router = express.Router();

const controleCursos = require('./controllers/Controlecursos');
const cursoMiddleware = require('./middlewares/cursomiddleware');



router.get('/cursos', controleCursos.getAll); 
router.post('/cursos',cursoMiddleware.validacaoTitulo, controleCursos.criarCurso); 
router.delete('/cursos/:id', controleCursos.cursoDeletado); 
router.put('/cursos/:id',
cursoMiddleware.validacaoTitulo,
cursoMiddleware.validacaoStatus, 
controleCursos.updateCurso
); 

module.exports = router;