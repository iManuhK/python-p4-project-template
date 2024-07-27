import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const nav = useNavigate();
  const API_URI = 'http://127.0.0.1:5555';

  const [authToken, setAuthToken] = useState(() => localStorage.getItem('token') ? localStorage.getItem('token') : null);
  const [currentUser, setCurrentUser] = useState(null);

  // Register User
  const register = (first_name, username, email, password) => {
    fetch(`${API_URI}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name,
        username,
        email,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          nav('/login');
          alert(`User ${username} created successfully!`);
        } else if (res.error) {
          alert(res.error);
        } else {
          alert("Something went wrong");
        }
      });
  };

  // Login User
  const login = (email, password) => {
    fetch(`${API_URI}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.access_token) {
          setAuthToken(res.access_token);
          localStorage.setItem('token', res.access_token);
          nav('/dashboard');
          alert("Login successful");
        } else if (res.error) {
          alert(res.error);
        } else {
          alert("Something went wrong");
        }
      });
  };

  // Fetch current user
  useEffect(() => {
    if (authToken) {
      fetch(`${API_URI}/current_user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${authToken}`
        }
      })
        .then(res => res.json())
        .then(res => {
          setCurrentUser(res);
        });
    } else {
      setCurrentUser(null);
    }
  }, [authToken]);

  // Logout User
  const logout = () => {
    fetch(`${API_URI}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setAuthToken(null);
          localStorage.removeItem('token');
          setCurrentUser(null);
          nav('/login');
          alert("Logout successful");
        } else {
          alert("Something went wrong");
        }
      });
  };

  const contextData = {
    currentUser,
    register,
    login,
    logout
  };

  return (
    <UserContext.Provider value={contextData}>
      {children}
    </UserContext.Provider>
  );
};
