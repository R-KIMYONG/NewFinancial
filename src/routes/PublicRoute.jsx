import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ element: Element}) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return !isAuthenticated ? <Element /> : <Navigate to="/" />;
};

export default PublicRoute;
