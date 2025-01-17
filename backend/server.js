const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Middleware untuk CORS
app.use(cors());

// Middleware untuk menyajikan file statis
app.use(express.static(path.join(__dirname, 'public')));

// Konfigurasi multer untuk menyimpan file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../sablon-app/src/assets/img')); // Simpan di src/assets/img
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Menyimpan dengan nama unik
    }
});

const upload = multer({ storage });

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

let isAdminLoggedIn = false;

// Middleware untuk memeriksa apakah admin sudah login
const checkAdminLogin = (req, res, next) => {
    console.log('Admin login status:', isAdminLoggedIn); // Log status login
    if (!isAdminLoggedIn) {
        return res.status(401).json({ message: 'Anda harus login terlebih dahulu' });
    }
    next();
};

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

// Rute untuk login admin (GET)
app.get('/login-admin', (req, res) => {
    const { username, password } = req.query; // Menggunakan query parameter
    const query = 'SELECT * FROM admin WHERE username = ? AND password = ?';
    
    db.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length > 0) {
            isAdminLoggedIn = true; // Set status login admin
            res.status(200).json({ message: 'Login admin berhasil', admin: results[0], redirect: '/dashboard' });
        } else {
            res.status(401).json({ message: 'Username atau password salah' });
        }
    });
});

// Rute untuk halaman dashboard admin
app.get('/dashboard', checkAdminLogin, (req, res) => {
    res.status(200).json({ message: 'Selamat datang di dashboard admin' });
});

// Rute untuk menghapus data dari tabel 'testimoni'
app.delete('/testimoni', checkAdminLogin, (req, res) => {
    const { nama_pengguna, isi_testimoni } = req.body;
    const query = 'DELETE FROM testimoni WHERE nama_pengguna = ? AND isi_testimoni = ?';
    
    db.query(query, [nama_pengguna, isi_testimoni], (err, results) => {
        if (err) {
            console.error('Error deleting testimonial:', err);
            return res.status(500).json({ error: 'Terjadi kesalahan saat menghapus testimoni.' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Testimoni tidak ditemukan.' });
        }
        res.status(200).json({ message: 'Testimoni berhasil dihapus.' });
    });
});

// Rute untuk mengambil data dari tabel 'categories'
app.get('/categories', (req, res) => {
    const query = 'SELECT * FROM categories';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Categories fetched:', results); // Tambahkan log untuk hasil
        res.status(200).json(results);
    });
});

// Rute untuk mengambil data dari tabel 'items'
app.get('/items', (req, res) => {
    const query = 'SELECT * FROM items';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching items:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});

// Rute untuk menambahkan kategori
app.post('/categories', upload.single('image'), (req, res) => {
    const { title, description } = req.body;
    const image = req.file ? `src/assets/img/${req.file.filename}` : null; // Ambil path gambar

    const query = 'INSERT INTO categories (title, description, image) VALUES (?, ?, ?)';
    
    db.query(query, [title, description, image], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, title, description, image });
    });
});

// Rute untuk memperbarui kategori
app.put('/categories/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const image = req.file ? `src/assets/img/${req.file.filename}` : null; // Ambil path gambar

    const query = 'UPDATE categories SET title = ?, description = ?, image = ? WHERE id = ?';
    
    db.query(query, [title, description, image, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ id, title, description, image });
    });
});

// Rute untuk menghapus kategori
app.delete('/categories/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM categories WHERE id = ?';
    
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Kategori berhasil dihapus' });
    });
});

// Rute untuk menambahkan item
app.post('/items', upload.single('image'), (req, res) => {
    const { name } = req.body;
    const image = req.file ? `src/assets/img/${req.file.filename}` : null; // Ambil path gambar

    const query = 'INSERT INTO items (name, image) VALUES (?, ?)';
    
    db.query(query, [name, image], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, name, image });
    });
});

// Rute untuk memperbarui item
app.put('/items/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const image = req.file ? `src/assets/img/${req.file.filename}` : null; // Ambil path gambar

    const query = 'UPDATE items SET name = ?, image = ? WHERE id = ?';
    
    db.query(query, [name, image, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ id, name, image });
    });
});

// Rute untuk menghapus item
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM items WHERE id = ?';
    
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Item berhasil dihapus' });
    });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});