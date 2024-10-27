// src/components/Dashboard.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    } else {
      axios
        .get('http://localhost:8000/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUserData(response.data))
        .catch((error) => {
          console.error('User data error:', error);
          localStorage.removeItem('token');
          navigate('/');
        });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      {userData ? (
        <div>
          <p>Welcome, {userData.name}</p>
          <button onClick={() => localStorage.removeItem('token') && navigate('/')}>
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
