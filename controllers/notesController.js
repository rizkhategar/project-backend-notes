const {
    insertNote,
    fetchAllNotes,
    fetchNoteById,
    modifyNote,
    removeNote
} = require('../models/notesModel');

exports.createNote = async (req, res) => {
    const { title, datetime, note } = req.body;
    try {
        const result = await insertNote({ title, datetime, note });
        res.status(201).json({ message: 'Note created successfully', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await fetchAllNotes();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getNoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await fetchNoteById(id);
        if (!note) return res.status(404).json({ message: 'Note not found' });
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, datetime, note } = req.body;
    try {
        const result = await modifyNote(id, { title, datetime, note });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Note not found' });
        res.status(200).json({ message: 'Note updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await removeNote(id);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Note not found' });
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
