import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import App1 from "./pages/fetching/App1";
import JenkinsDashBoard from "./pages/fetching/JenkinsDashBoard";
import Dash from "./pages/dashboard/Dash"
import Contact from "./pages/contact/Contact";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import React from "react";

/**import Dash from "./pages/dashboard/Dash"
import { Component } from "react";*/

 function App() {
  
 
  return (
    
    
    /**<Component/>*/
   
       <Router>
      <TopBar/>
      
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/settings" element={<Settings/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/dashboard" element={<JenkinsDashBoard/>} />
        <Route exact path="/write" element={<Write/>} />
        <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      
       
  );
}

export default App;
