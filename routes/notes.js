// routes/notes.js
const express = require('express');
const router = express.Router();

let notes = [];  // Simulasi array untuk menyimpan catatan

// Rute POST untuk membuat catatan baru
router.post('/', (req, res) => {
  const { title, note } = req.body;
  const datetime = new Date(); // Set tanggal saat ini

  // Simulasi menyimpan catatan ke database (disimpan di array)
  const newNote = { id: Date.now(), title, datetime, note };
  notes.push(newNote);  // Menyimpan catatan baru ke array

  // Mengirimkan respons catatan baru
  res.status(201).json(newNote);
});

// Rute GET untuk menampilkan semua catatan
router.get('/', (req, res) => {
  res.json(notes);  // Mengirimkan seluruh catatan dalam array
});

// Rute GET untuk menampilkan satu catatan berdasarkan ID
router.get('/:id', (req, res) => {
  const { id } = req.params;  // Mendapatkan ID dari URL

  // Mencari catatan berdasarkan ID
  const note = notes.find(n => n.id.toString() === id);

  if (note) {
    res.json(note);  // Mengirimkan catatan yang ditemukan
  } else {
    res.status(404).json({ message: 'Note not found' });  // Jika catatan tidak ditemukan
  }
});

// Rute PUT untuk mengubah catatan berdasarkan ID (termasuk tanggal)
router.put('/:id', (req, res) => {
  const { id } = req.params;  // Mendapatkan ID dari URL
  const { title, note } = req.body;
  const datetime = new Date(); // Set tanggal saat ini (tanggal pembaruan)

  // Mencari catatan berdasarkan ID
  const noteIndex = notes.findIndex(n => n.id.toString() === id);

  if (noteIndex !== -1) {
    // Mengubah catatan yang ditemukan
    notes[noteIndex] = {
      ...notes[noteIndex],
      title,
      note,
      datetime,  // Memperbarui tanggal
    };

    // Mengirimkan respons catatan yang sudah diperbarui
    res.json(notes[noteIndex]);
  } else {
    res.status(404).json({ message: 'Note not found' });  // Jika catatan tidak ditemukan
  }
});

// Rute DELETE untuk menghapus catatan berdasarkan ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;  // Mendapatkan ID dari URL

  // Mencari indeks catatan berdasarkan ID
  const noteIndex = notes.findIndex(n => n.id.toString() === id);

  if (noteIndex !== -1) {
    // Menghapus catatan yang ditemukan
    notes.splice(noteIndex, 1);  // Menghapus 1 item dari array pada indeks yang ditemukan

    // Mengirimkan respons sukses
    res.status(200).json({ message: 'Note deleted successfully' });
  } else {
    res.status(404).json({ message: 'Note not found' });  // Jika catatan tidak ditemukan
  }
});

module.exports = router;
