import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Login from './pages/Login';
import Register from './pages/Register';

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  if (!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/register') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="app animate-page-load">
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Homepage /> : null}
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;