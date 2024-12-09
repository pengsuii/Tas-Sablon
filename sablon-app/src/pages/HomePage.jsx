import React, { useState, useEffect } from 'react';
import '../dist/css/main.css';
import produkHeader from '../assets/img/produk-jumbotron.jpg'; 
import totebagImg from '../assets/img/tote-bag.jpg';
import potchImg from '../assets/img/potch.jpg';
import bestImg from '../assets/img/best.jpg';
import fastImg from '../assets/img/fast.png';
import cheapImg from '../assets/img/cheap.png';
import qualityImg from '../assets/img/quality.png';
import tokoImg from '../assets/img/toko.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); 
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '0px', position: 'relative', zIndex: 1, marginTop: '10px' }}>
            <Col style={{ textAlign: 'left', padding: '20px', marginLeft: '-150px', marginTop: '-100px' }}> 
              <h1 style={{ fontWeight: 'bold', fontSize: '50px' }}>
                Personalisasi Gaya Anda dengan Tote Bag Unik dan Eksklusif
              </h1>
              <p style={{ fontWeight: 'inherit', fontSize: '17px' }}>
                Sablon Custom, Kualitas Premium - Buat Ceritamu Tertulis di Setiap Tas
              </p>
              <a href="https://forms.gle/nd9iVMCNTuX1nPWc7"target="_blank" rel="noopener noreferrer">
              <button
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  backgroundColor: isHovered ? '#7A5A3B' : '#A68B5B',
                  padding: '10px 12px',
                  width: '133px',
                  height: '48px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#FAFAFA',
                  fontSize: '14px',
                  fontWeight: 'inherit',
                  transition: 'background-color 0.5s'
                }}
              >
                Pesan Sekarang
              </button>
              </a>
            </Col>
            <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: '170px', marginTop: '-100px' }}>
              <img 
                src={produkHeader} 
                alt="Produk" 
                style={{ 
                  width: '350px',
                  height: '380px', 
                  borderRadius: '40px', 
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                }} 
              />
            </Col>
          </Row>
        </Container>
        <div className={`ellipse ${isVisible ? 'fade-in' : ''}`} style={{ marginLeft: '80px', position: 'absolute', zIndex: 0 }}>
          <Row className="greeting" style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '20px', position: 'relative', zIndex: 1, marginTop: '20px' }}>
            <Col style={{ textAlign: 'left', padding: '20px' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '50px' }}>
                Personalisasi Gaya Anda dengan Tote Bag Unik dan Eksklusif
              </h1>
              <p style={{ fontWeight: 'inherit', fontSize: '17px' }}>
                Sablon Custom, Kualitas Premium - Buat Ceritamu Tertulis di Setiap Tas
              </p>
            </Col>
          </Row>
        </div>
      </header>
      <div className="custom-category w-2 min-vh-20">
        <Container>
          <Row>
            <Col style={{ textAlign: 'left', padding: '20px', marginLeft: '-150px' }}>
              <h2 style={{ fontWeight: 'bold' }}>OTHER CUSTOM CATEGORY</h2>
            </Col>
          </Row>
          <Row>
            <Col style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
              <div style={{ border: '1px solid #A68B5B', borderRadius: '8px', padding: '10px', flex: 1, display: 'flex', alignItems: 'center', marginLeft: '-150px', marginRight: '100px' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 'inherit' }}>Custom Tote Bag</h3>
                  <p>Ekspresikan diri dengan tote bag custom yang stylish dan fungsional, dibuat khusus untuk Anda.</p>
                  <button className="button-explore">
                    EXPLORE TOTE BAG <FaArrowUpRightFromSquare />
                  </button>
                </div>
                <img src={totebagImg} alt="Custom Tote Bag" style={{ width: '150px', height: '150px', borderRadius: '8px', marginLeft: '5px', objectFit: 'cover' }} />
              </div>
            </Col>
            <Col style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
              <div style={{ border: '1px solid #A68B5B', borderRadius: '8px', padding: '10px', flex: 1, display: 'flex', alignItems: 'center', marginLeft: '100px', marginRight: '-150px' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 'inherit' }}>Custom Pouch</h3>
                  <p>Pouch multifungsi yang bisa disesuaikan dengan selera Anda. Praktis, elegan, dan penuh karakter!</p>
                  <button className="button-explore">
                    EXPLORE POUCH <FaArrowUpRightFromSquare />
                  </button>
                </div>
                <img src={potchImg} alt="Custom Pouch" style={{ width: '150px', height: '150px', borderRadius: '8px', marginLeft: '5px', objectFit: 'cover' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="best-choice w-100 min-vh-50 mt-5">
        <Container>
          <Row>
            <Col style={{ textAlign: 'left', padding: '20px', marginLeft: '-150px' }}>
              <h2 style={{ fontWeight: 'bold' }}>WHAT MAKES US THE BEST CHOICE</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
              <img 
                src={bestImg} 
                alt="Best Choice" 
                style={{ 
                  width: '527px', 
                  height: '449px', 
                  borderRadius: '24px', 
                  marginRight: '20px',
                  objectFit: 'cover',
                  marginLeft: '-150px',
                  transition: 'transform 0.3s'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </Col>
            <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src={fastImg} alt="Cepat" style={{ width: '120px', height: '120px', marginRight: '24px' }} />
                <div>
                  <h3 style={{ fontWeight: 'bold' }}>Cepat</h3>
                  <p>Pesanan Anda diproses dengan cepat dan tepat waktu, tanpa mengurangi kualitas.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src={cheapImg} alt="Murah" style={{ width: '120px', height: '120px', marginRight: '24px' }} />
                <div>
                  <h3 style={{ fontWeight: 'bold' }}>Murah</h3>
                  <p>Dapatkan produk custom berkualitas dengan harga yang ramah di kantong.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={qualityImg} alt="Berkualitas" style={{ width: '120px', height: '120px', marginRight: '24px' }} />
                <div>
                  <h3 style={{ fontWeight: 'bold' }}>Berkualitas</h3>
                  <p>Menggunakan material terbaik dan sablon awet untuk hasil maksimal yang tahan lama.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="sosmed-section" style={{ position: 'relative', backgroundImage: `url(${tokoImg})`, backgroundSize: 'cover', padding: '120px 0', marginTop: '50px' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }} />
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row>
            <Col style={{ textAlign: 'center' }}>
              <h2 style={{ color: '#fff', fontWeight: 'bold' }}>WHAT MAKES US THE BEST CHOICE</h2>
              <p style={{ color: '#fff' }}>Temukan berbagai tote bag dan pouch custom yang siap mendukung gaya dan kebutuhan Anda. Dari desain unik hingga kualitas terbaik, kami hadir untuk Anda!</p>
              <a href="https://www.instagram.com/tas_sablon_express?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <button
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'gray'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  style={{ backgroundColor: 'transparent', color: '#FAFAFA', padding: '10px 20px', border: '2px solid #FAFAFA', borderRadius: '8px' }}
                >
                  SEE OUR INSTAGRAM <FaArrowUpRightFromSquare style={{ marginLeft: '5px' }} />
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;