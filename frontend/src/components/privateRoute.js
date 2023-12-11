import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const email = localStorage.getItem("email");

  return (
    <>
      {email ? (
        <Outlet />
      ) : (
        <Navigate to="/retirement-accounts" />
      )}
    </>
  );
};
