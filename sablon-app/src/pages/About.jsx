import React from 'react';
import '../dist/css/main.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import aboutImg from '../assets/img/white-totebag.jpg';
import terbaikImg from '../assets/img/tas-about.jpg';

const About = () => {
  return (
    <div className="aboutpage">
      <Container style={{ textAlign: 'center', padding: '20px', position: 'relative' }}>
        <Row>
          <Col>
            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '453px' }}>
              <img src={aboutImg} alt="About" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
              <h1 style={{fontWeight:'bolder'}}>Tas Sablon Express</h1>
              <p style={{ fontWeight: '500',marginTop: '20px' }}>
                Layanan produksi berbagai jenis tas custom yang dapat digunakan untuk berbagai keperluan, seperti seminar, souvenir, ulang tahun, wedding, produksi promosi perusahaan, dan lainnya. 
                Tas-tas ini dibuat dari berbagai jenis bahan berkualitas, dengan berbagai ukuran, dan bisa dipesan sesuai kebutuhan pelanggan, termasuk untuk keperluan khusus seperti tas sekolah, tas bidan, tas wedding, dan sebagainya.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='pilihan-bahan w-2 min-vh-20'>
        <Container style={{textAlign:'center',position:'relative'}}>
          <Row style={{ marginTop: '40px', justifyContent: 'center' }}>
            <h1>Pilihan Bahan</h1>
            <Col md={3} style={{ margin: '10px' }}>
              <Card style={{ height: '100%', border: '2px solid #A0855B' }}>
                <Card.Body style={{ padding: '30px' }}>
                  <Card.Title style={{ textAlign: 'left', fontWeight: 'bold' }}>Spunbond (75 gram dan 100 gram)</Card.Title>
                  <Card.Text style={{ textAlign: 'left' }}>
                    Bahan ringan, ramah lingkungan, dan cocok untuk keperluan tas sekali pakai atau tas promosi.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{ margin: '10px' }}>
              <Card style={{ height: '100%', border: '2px solid #A0855B' }}>
                <Card.Body style={{ padding: '30px' }}>
                  <Card.Title style={{ textAlign: 'left', fontWeight: 'bold' }}>Baby Canvas & Canvas</Card.Title>
                  <Card.Text style={{ textAlign: 'left' }}>
                    Tekstur kain yang kuat dan tahan lama, memberikan tampilan yang lebih mewah.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{ margin: '10px' }}>
              <Card style={{ height: '100%', border: '2px solid #A0855B' }}>
                <Card.Body style={{ padding: '30px' }}>
                  <Card.Title style={{ textAlign: 'left', fontWeight: 'bold' }}>Blacu</Card.Title>
                  <Card.Text style={{ textAlign: 'left' }}>
                    Kain yang kuat dengan tampilan yang sederhana dan alami.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col md={3} style={{ margin: '10px' }}>
              <Card style={{ height: '100%', border: '2px solid #A0855B' }}>
                <Card.Body style={{ padding: '30px' }}>
                  <Card.Title style={{ textAlign: 'left', fontWeight: 'bold' }}>Mika</Card.Title>
                  <Card.Text style={{ textAlign: 'left' }}>
                    Transparan, cocok untuk pouch atau tas kosmetik.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{ margin: '10px' }}>
              <Card style={{ height: '100%', border: '2px solid #A0855B' }}>
                <Card.Body style={{ padding: '30px' }}>
                  <Card.Title style={{ textAlign: 'left', fontWeight: 'bold' }}>Dinir (D300 & D600)</Card.Title>
                  <Card.Text style={{ textAlign: 'left' }}>
                    D300: Tekstur lembut, sertai kecil, tahan lama dan sulit robek. 
                    D600: Tekstur lebih besar, wrinkle-free, lebih tahan lama, dan kuat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='pilihan-terbaik w-2 min-vh-20 mb-5'>
        <Container style={{ textAlign: 'center', position: 'relative' }}>
          <Row style={{ marginTop: '40px', justifyContent: 'flex-start' }}>
            <h1>Pilihan Terbaik Untuk Kebutuhan Anda</h1>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col md={6} style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <img src={terbaikImg} alt="Pilihan Terbaik" style={{ width: '651px', height: '815px', objectFit: 'cover', borderRadius: '24px' }} />
              </div>
            </Col>
            <Col md={3} style={{ margin: '100px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ color: '#806A49' }}>Kualitas</h2>
                <p>Bahan kuat, tahan lama, dan tersedia berbagai pilihan sesuai kebutuhan dan anggaran.</p>
              </div>
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ color: '#806A49' }}>Customizable</h2>
                <p>Bisa disesuaikan ukuran, warna, bahan, dan jenis sablon atau bordiran sesuai preferensi.</p>
              </div>
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ color: '#806A49' }}>Harga Terjangkau</h2>
                <p>Menawarkan berbagai pilihan harga yang bisa disesuaikan dengan budget pelanggan.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='google-maps w-2 min-vh-20 mb-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ marginBottom: '40px', textAlign: 'center' }}>Lokasi Kami</h1>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4726.794481922771!2d106.77336628844577!3d-6.368575505378205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eed94194c9fd%3A0xc56241d049ee54c8!2sJl.%20Kec.%20No.50%2C%20Limo%2C%20Kec.%20Limo%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016514!5e0!3m2!1sid!2sid!4v1734363947523!5m2!1sid!2sid" 
          width="1152px" 
          height="453px" 
          style={{ border: 0, borderRadius: '24px', marginBottom: '20px' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <h5 style={{ textAlign: 'left', alignSelf: 'flex-start', marginLeft: '20%' }}>
          LOCATION<br />
          Jalan Arthyasa<br />
          No. 50, Kec. Limo, Depok 16515
        </h5>
      </div>
    </div>
  );
}

export default About;