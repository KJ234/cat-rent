import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Booking from "../pages/bookings";
import Sellcar from "../pages/sellcar";
import Setting from "../pages/setting";

function routes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/sell-cat" element={<Sellcar />} />
    </Routes>
  );
}

export default routes;
