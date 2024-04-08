import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Search from "./page/Search";
import Feed from "./page/Feed";
import Mainhome from "./page/Mainhome";
import Login from "./page/Login";
import LoginPage from "./components/login/LoginPage"; // 수정된 부분
import SignUp from "./components/login/SignUp"; // 수정된 부분
import LibraryHome from "./components/library/LibraryHome";


const App = () => {
  return (
    <>
      <Search />
      <Feed />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/main" element={<Mainhome />} />
        <Route path="/library" element={<LibraryHome />} />
      </Routes>
      {/* main 에 다 섞여야함 */}
    </>
  );
};

export default App;
