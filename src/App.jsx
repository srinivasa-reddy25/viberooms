import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import Home from './Home/Home'; // You'll need to create this component
import './App.css';

import { handleGoogleLogin } from './config.js'; // Import your Google login handler


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to signin page */}
        <Route path="/" element={<Navigate to="/signin" replace />} />
        
        {/* Authentication routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Main application routes */}
        <Route path="/home" element={<Home />} />
        
        {/* Add a fallback route for 404 - Page not found */}
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
