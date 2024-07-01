import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import EmployeeDashboard from './pages/AI Shoe Analyzer/Company_emp_screen';
import ScrollTop from './components/ScrollTop';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import HomeTwo from './pages/HomeTwo/HomeTwo';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails/PortfolioDetails';
import Services from './pages/Services/Services';
import Price from './pages/Pricing/Price';
import Develop from './pages/Develop/Develop';
import UploadScreen from './pages/AI Shoe Analyzer/UploaderScreen';
import Dashboard from './pages/AI Shoe Analyzer/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import LoginDesign from './pages/AI Shoe Analyzer/LoginScreen';
import SignUpDesign from './pages/AI Shoe Analyzer/Signup';
import EmployeeRecords from './pages/AI Shoe Analyzer/Company_ViewEmployee';
import Evalaute from "./pages/AI Shoe Analyzer/evaluatorscreen";

import CompanyDashboard from './pages/AI Shoe Analyzer/Dashboardscreen';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/auth/verify', {
          method: 'POST',
          headers: { token: localStorage.token },
        });
        const parseRes = await response.json();
        setIsAuthenticated(parseRes === true);
      } catch (error) {
        console.error(error.message);
       
      }
    };

    checkAuth();
  }, []);

  return (

    <Fragment>
      <BrowserRouter>
        <ScrollTop/>
        <Routes>
            <Route path="/" element={<HomeTwo/>} />
            <Route path="/companydashboard" element={<CompanyDashboard />} />
            <Route 
              path="/login" 
              element={!isAuthenticated ? 
                <LoginDesign setAuth={setIsAuthenticated} /> : 
                <Navigate to="/companydashboard" replace />} 
            />
            <Route 
              path="/signup" 
              element={!isAuthenticated ? 
                <SignUpDesign setAuth={setIsAuthenticated} /> : 
                <Navigate to="/signup" replace />} 
            />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/Upload" element={<UploadScreen/>} />
            <Route path="/evaluate" element={<Evalaute/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/upload" element={<UploadScreen />} />
            <Route path='/view-employee' element={<EmployeeRecords/>}></Route>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolioDetails" element={<PortfolioDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/price" element={<Price />} />
            <Route path="/develop" element={<Develop />} />
            <Route path="/addemployee" element={<EmployeeDashboard />} />
          </Routes>
      </BrowserRouter>
      {/* <ToastContainer /> */}
    </Fragment>
  );
}

export default App;
