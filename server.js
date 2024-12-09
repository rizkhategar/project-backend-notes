// server.js
const express = require('express');
const notesRoutes = require('./routes/notes');

const app = express();
const PORT = process.env.APP_PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan rute untuk /api/notes
app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
