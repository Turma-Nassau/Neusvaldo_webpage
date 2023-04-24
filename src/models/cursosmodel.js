const connection = require('./connection');

const getAll = async () => {
    const [cursos] = await connection.execute('SELECT * FROM cursos');
    return cursos;
};

const criarCurso = async (curso) => {
    const  { title } = curso;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO cursos(title, status, data_criada) values (? ,? ,?)'

    const [cursoCriado] = await connection.execute(query, [title,'pendente', dateUTC]);

    return {insertId: cursoCriado.insertId};
};

const deleteCurso= async (id) => {
    const [removerCurso] = await connection.execute('DELETE FROM cursos WHERE id = ?', [id]);
    return removerCurso;
};

const updateCurso= async (id, curso) => {
    const query = 'UPDATE cursos SET title = ?, status = ? WHERE id = ?'
    const {title,status} = curso;
    const [updatedCurso] = await connection.execute(query, [title,status,id]);

    return updateCurso;
};
module.exports = {
    getAll,
    criarCurso,
    deleteCurso,
    updateCurso,
}