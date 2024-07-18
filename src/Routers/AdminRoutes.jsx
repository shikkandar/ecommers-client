import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/components/Admin";


const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />}></Route>
        {/* <Route path="/demo" element={<DemoAdmin />}></Route> */}
      </Routes>
    </div>
  );
};

export default AdminRoutes;
