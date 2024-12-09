const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Konfigurasi koneksi ke database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tas_sablon'
});

// Koneksi ke database
db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal:', err);
        return;
    }
    console.log('Terhubung ke database MySQL');
});

// Rute untuk menambahkan data ke tabel 'testimoni'
app.post('/testimoni', (req, res) => {
    const { nama_pengguna, isi_testimoni } = req.body;
    const query = 'INSERT INTO testimoni (nama_pengguna, isi_testimoni) VALUES (?, ?)';
    
    db.query(query, [nama_pengguna, isi_testimoni], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, nama_pengguna, isi_testimoni });
    });
});


app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});