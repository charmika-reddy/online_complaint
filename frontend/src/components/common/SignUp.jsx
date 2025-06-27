import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './FooterC';

const SignUp = () => {
  const [title, setTitle] = useState('Select User');
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    userType: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleTitle = (select) => {
    setTitle(select);
    setUser({ ...user, userType: select });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { ...user, userType: title };
    axios
      .post('http://localhost:8000/SignUp', updatedUser)
      .then((res) => {
        alert('Record submitted');
      })
      .catch((err) => {
        console.log(err);
      });
    setUser({
      name: '',
      email: '',
      password: '',
      phone: '',
      userType: '',
    });
    setTitle('Select User');
  };

  return (
    <>
      <Navbar style={{ backgroundColor: '#1e1e2f' }} variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand style={{ color: '#00d4ff', fontWeight: 'bold' }}>
            ComplaintCare
          </Navbar.Brand>
          <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link text-light">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-light">
                Login
              </Link>
            </li>
          </ul>
        </Container>
      </Navbar>

      <section
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to right, #e3f2fd, #bbdefb)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 0',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            display: 'flex',
            width: '100%',
            maxWidth: '1100px',
            overflow: 'hidden',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          }}
        >
          {/* Left side image */}
          <div
            style={{
              flex: '1',
              backgroundColor: '#e3f2fd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <img
              src="https://undraw.co/ap/illustrations/5fcf45d5-3b62-4d38-a4e1-cf9d8a06dbbd.svg"
              alt="SignUp"
              style={{ width: '100%', maxWidth: '400px' }}
            />
          </div>

          {/* Right side form */}
          <div
            style={{
              flex: '1',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '10px', color: '#0d47a1' }}>
              Register for ComplaintCare
            </h2>
            <p style={{ marginBottom: '30px', color: '#555' }}>
              Please fill in the details to create an account
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label style={{ fontWeight: 'bold' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label style={{ fontWeight: 'bold' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label style={{ fontWeight: 'bold' }}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label style={{ fontWeight: 'bold' }}>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label style={{ fontWeight: 'bold' }}>User Type</label>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {title}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleTitle('Ordinary')}>
                      Ordinary
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleTitle('Admin')}>
                      Admin
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleTitle('Agent')}>
                      Agent
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#0d47a1',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  marginTop: '10px',
                  width: '100%',
                }}
              >
                Register
              </button>
            </form>
            <p style={{ marginTop: '20px', fontSize: '14px' }}>
              Already have an account?{' '}
              <Link to="/Login" style={{ color: '#1976d2' }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

// 👇 Shared input style for consistency
const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginTop: '5px',
};

export default SignUp;
