// src/components/Callback.js
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
    if (code) {
      axios
        .post('http://localhost:8000/api/auth/callback', { code })
        .then((response) => {
          const { access_token } = response.data;
          localStorage.setItem('token', access_token);
          navigate('/dashboard');
        })
        .catch((error) => console.error('Authentication error:', error));
    }
  }, [location, navigate]);

  return <div>Authenticating...</div>;
};

export default Callback;
