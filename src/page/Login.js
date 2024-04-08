import React from "react";
import  LoginHome  from "../components/login/LoginHome";
import { Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<LoginHome />} />
      </Routes>
    </div>
  );
};

export default Login;
