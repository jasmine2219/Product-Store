import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Removed Router import as it's not needed
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  );
};

export default App;
