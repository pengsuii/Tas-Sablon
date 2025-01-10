import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import loginImg from '../assets/img/login.jpg';
import loginBg from '../assets/img/bg-login.jpg';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    fetch(`http://localhost:3000/login-admin?username=${username}&password=${password}`)
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Login admin berhasil') {
          alert(data.message);
          setIsLoggedIn(true);
          navigate('/dashboard');
        } else {
          alert(data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat login');
      });
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container className="mt-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="login-image">
            <img src={loginImg} alt="Login" className="img-fluid" />
          </Col>
          <Col md={6} className="login-container">
            <h2 className="text-center login-title font-weight-bold">Login Admin</h2>
            <p className="text-center">Selamat datang di portal admin, login untuk memulai.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUsername" className="mb-3">
                <Form.Label>Masukan username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Masukan username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Masukan password</Form.Label>
                <div className="input-group">
                  <Form.Control 
                    type={showPassword ? "text" : "password"}
                    name="password" 
                    placeholder="Masukan password" 
                  />
                  <span 
                    className="input-group-text" 
                    onClick={handleTogglePassword} 
                    style={{ cursor: 'pointer', border: 'none' }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </Form.Group>
              <Button type="submit" className="w-100 login-button custom-login-button">
                LOGIN
              </Button>
            </Form>
            <Button 
              variant="link" 
              onClick={() => navigate('/')} 
              className="mt-3"
            >
              Kembali ke Homepage
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;