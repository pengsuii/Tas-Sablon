import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Alert, Button, Modal, Form } from 'react-bootstrap';


const Dashboard = ({ isLoggedIn }) => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [showItemModal, setShowItemModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [itemName, setItemName] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      window.alert('Anda harus login terlebih dahulu!');
      navigate('/login');
    } else {
      // Mengambil data kategori
      fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(error => console.error('Error fetching categories:', error));

      // Mengambil data items
      fetch('http://localhost:3000/items')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error fetching items:', error));
    }
  }, [isLoggedIn, navigate]);

  const handleShowModal = (category) => {
    if (category) {
      setTitle(category.title);
      setDescription(category.description);
      setImage(null);
      setCurrentCategory(category);
    } else {
      setTitle('');
      setDescription('');
      setImage(null);
      setCurrentCategory(null);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setCurrentCategory(null);
    setShowModal(false);
  };

  const handleSaveCategory = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    if (currentCategory) {
      // Update kategori yang sudah ada
      fetch(`http://localhost:3000/categories/${currentCategory.id}`, {
        method: 'PUT',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        setCategories(categories.map(cat => (cat.id === data.id ? data : cat)));
        handleCloseModal();
      })
      .catch(error => console.error('Error updating category:', error));
    } else {
      // Tambah kategori baru
      fetch('http://localhost:3000/categories', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        setCategories([...categories, data]);
        handleCloseModal();
      })
      .catch(error => console.error('Error adding category:', error));
    }
  };

  const handleDeleteCategory = (id) => {
    fetch(`http://localhost:3000/categories/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setCategories(categories.filter(category => category.id !== id));
      } else {
        console.error('Error deleting category');
      }
    })
    .catch(error => console.error('Error deleting category:', error));
  };

  const handleShowItemModal = (item) => {
    if (item) {
      setItemName(item.name);
      setItemImage(null);
      setCurrentItem(item);
    } else {
      setItemName('');
      setItemImage(null);
      setCurrentItem(null);
    }
    setShowItemModal(true);
  };

  const handleCloseItemModal = () => {
    setCurrentItem(null);
    setShowItemModal(false);
  };

  const handleSaveItem = () => {
    const formData = new FormData();
    formData.append('name', itemName);
    if (itemImage) {
      formData.append('image', itemImage);
    }

    if (currentItem) {
      // Update item yang sudah ada
      fetch(`http://localhost:3000/items/${currentItem.id}`, {
        method: 'PUT',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        setItems(items.map(item => (item.id === data.id ? data : item)));
        handleCloseItemModal();
      })
      .catch(error => console.error('Error updating item:', error));
    } else {
      // Tambah item baru
      fetch('http://localhost:3000/items', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        setItems([...items, data]);
        handleCloseItemModal();
      })
      .catch(error => console.error('Error adding item:', error));
    }
  };

  const handleDeleteItem = (id) => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setItems(items.filter(item => item.id !== id));
      } else {
        console.error('Error deleting item');
      }
    })
    .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <Container className="mt-4">
      <Alert variant="info">Selamat datang di dashboard admin!</Alert>
      <h1 className="text-center mb-4">Dashboard Admin</h1>
      <h2 className="text-primary">Jumlah Kategori: {categories.length}</h2>
      <Button onClick={() => handleShowModal(null)}>Tambah Kategori</Button>
      <ListGroup className="mb-4">
        {categories.map(category => (
          <ListGroup.Item key={category.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{category.title}</strong>
              <div className="text-muted">ID: {category.id}</div>
            </div>
            <div>
              <Button variant="warning" onClick={() => handleShowModal(category)}>Edit</Button>
              <Button variant="danger" onClick={() => handleDeleteCategory(category.id)}>Hapus</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2 className="text-success">Jumlah Items: {items.length}</h2>
      <Button onClick={() => handleShowItemModal(null)}>Tambah Item</Button>
      <ListGroup className="mb-4">
        {items.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.name}</strong>
              <div className="text-muted">ID: {item.id}</div>
            </div>
            <div>
              <Button variant="warning" onClick={() => handleShowItemModal(item)}>Edit</Button>
              <Button variant="danger" onClick={() => handleDeleteItem(item.id)}>Hapus</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentCategory ? 'Edit Kategori' : 'Tambah Kategori'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCategoryTitle">
              <Form.Label>Judul Kategori</Form.Label>
              <Form.Control 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formCategoryDescription">
              <Form.Label>Deskripsi Kategori</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formCategoryImage">
              <Form.Label>Unggah Gambar</Form.Label>
              <Form.Control 
                type="file" 
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleSaveCategory}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showItemModal} onHide={handleCloseItemModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentItem ? 'Edit Item' : 'Tambah Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formItemName">
              <Form.Label>Nama Item</Form.Label>
              <Form.Control 
                type="text" 
                value={itemName} 
                onChange={(e) => setItemName(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formItemImage">
              <Form.Label>Unggah Gambar</Form.Label>
              <Form.Control 
                type="file" 
                onChange={(e) => setItemImage(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseItemModal}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleSaveItem}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Dashboard;