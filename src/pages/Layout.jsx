import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar.jsx";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
