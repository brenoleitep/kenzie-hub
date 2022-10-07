import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const RoutesMain = () => {
  // const [getToken, setGetToken] = useState(localStorage.getItem("token"));

  return (
    <>
      {/* {getToken ? (
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        
        <Route path="*" element={<Navigate to="/Dashboard" />} />
        </Routes>
      ) : ( */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      {/* )} */}
    </>
  );
};

export default RoutesMain;
