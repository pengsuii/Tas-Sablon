const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Middleware untuk CORS
app.use(cors());

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

// Rute untuk mengambil data dari tabel 'testimoni'
app.get('/testimoni', (req, res) => {
    const query = 'SELECT * FROM testimoni';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching testimonials:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});