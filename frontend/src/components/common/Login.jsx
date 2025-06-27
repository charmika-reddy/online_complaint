import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './FooterC';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:8000/Login', user)
      .then((res) => {
        alert('Successfully logged in');
        localStorage.setItem('user', JSON.stringify(res.data));
        const { userType } = res.data;
        switch (userType) {
          case 'Admin':
            navigate('/AdminHome');
            break;
          case 'Ordinary':
            navigate('/HomePage');
            break;
          case 'Agent':
            navigate('/AgentHome');
            break;
          default:
            navigate('/Login');
            break;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          alert("User doesn't exist");
        }
        navigate('/Login');
      });
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
          background: 'linear-gradient(to right, #1a237e, #0d47a1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 0',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            padding: '40px 30px',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '450px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginBottom: '10px', color: '#0d47a1' }}>
            Login to Continue
          </h2>
          <p style={{ marginBottom: '30px', color: '#555' }}>
            Please enter your credentials
          </p>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <label style={{ fontWeight: 'bold', fontSize: '14px' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  marginTop: '5px',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <label style={{ fontWeight: 'bold', fontSize: '14px' }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                autoComplete="off"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  marginTop: '5px',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#0d47a1',
                color: '#fff',
                border: 'none',
                padding: '10px 25px',
                borderRadius: '8px',
                fontWeight: 'bold',
                width: '100%',
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = '#1565c0')
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = '#0d47a1')
              }
            >
              Login
            </button>
          </form>
          <p style={{ marginTop: '20px', fontSize: '14px' }}>
            Don't have an account?{' '}
            <Link to="/SignUp" style={{ color: '#1976d2' }}>
              SignUp
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
