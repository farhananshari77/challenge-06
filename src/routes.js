import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/Login/Login";
import Home from "./features/Home/Home";
import Dashboard from "./features/Dashboard/Dashboard";
import Register from "./features/Register/Register"

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;