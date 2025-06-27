import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image1 from '../../Images/Image1.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC';

const Home = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: '#1e1e2f' }} variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand className="fw-bold" style={{ color: '#00d4ff', fontSize: '1.6rem' }}>
            Complaint
          </Navbar.Brand>
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: '#ffffff', fontWeight: 500 }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link" style={{ color: '#ffffff', fontWeight: 500 }}>
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" style={{ color: '#ffffff', fontWeight: 500 }}>
                Login
              </Link>
            </li>
          </ul>
        </Container>
      </Navbar>

      <Container
        fluid
        style={{
          backgroundColor: '#121212',
          color: '#e0e0e0',
          padding: '60px 10%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <div className="text-section" style={{ flex: '1 1 50%', paddingRight: '5%' }}>
          <h1 style={{ fontSize: '2.2rem', color: '#00d4ff', fontWeight: '700' }}>
            Transform Feedback into Action
          </h1>
          <p style={{ fontSize: '1.1rem', marginTop: '20px', color: '#cccccc' }}>
            Take control of customer satisfaction with our efficient and user-friendly complaint management system.
          </p>
          <Link to="/Login">
            <Button
              style={{
                marginTop: '30px',
                backgroundColor: '#00d4ff',
                color: '#000',
                border: 'none',
                fontWeight: 'bold',
                padding: '10px 22px',
                borderRadius: '8px',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#00b5e2')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#00d4ff')}
            >
              File a Complaint
            </Button>
          </Link>
        </div>

        <div className="image-section" style={{ flex: '1 1 40%' }}>
          <img
            src={Image1}
            alt="complaint"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
              marginTop: '30px',
            }}
          />
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
