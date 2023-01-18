import React from "react";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./Components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Navbar />,<LandingPage/>]}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;