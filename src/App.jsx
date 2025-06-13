import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import Home from './Home/Home';
import './App.css';

/**
 * AuthRoute - Protects routes that require authentication
 * Redirects to signin if user is not authenticated
 */
function AuthRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

/**
 * PublicRoute - For routes accessible without authentication
 * Redirects to home if user is already authenticated
 */
function PublicRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes - accessible when logged out */}
        <Route 
          path="/" 
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          } 
        />
        <Route 
          path="/signin" 
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          } 
        />
        
        {/* Protected routes - require authentication */}
        <Route 
          path="/home" 
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          } 
        />
        
        {/* 404 - Page not found */}
        <Route path="*" element={
          <div className="not-found">
            <h1>404</h1>
            <p>Page not found</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;