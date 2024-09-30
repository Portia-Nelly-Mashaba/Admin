import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components


//pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';


// import Error from './pages/Error'; // Assuming you have an Error component

//react router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminPanel from './pages/admin/AdminPanel';






const App = () => {
  
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Existing routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
