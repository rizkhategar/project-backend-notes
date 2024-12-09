const db = require('../db/connection');

exports.insertNote = ({ title, datetime, note }) => {
    const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    return db.execute(query, [title, datetime, note]);
};

exports.fetchAllNotes = () => {
    const query = 'SELECT * FROM notes';
    return db.execute(query).then(([rows]) => rows);
};

exports.fetchNoteById = (id) => {
    const query = 'SELECT * FROM notes WHERE id = ?';
    return db.execute(query, [id]).then(([rows]) => rows[0]);
};

exports.modifyNote = (id, { title, datetime, note }) => {
    const query = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    return db.execute(query, [title, datetime, note, id]);
};

exports.removeNote = (id) => {
    const query = 'DELETE FROM notes WHERE id = ?';
    return db.execute(query, [id]);
};
