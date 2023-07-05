import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Booking from "./page/Booking";
import UniformLayout from "./structure/UniformLayout";

function CommonRouter() {

  const routerStructure = [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/booking",
      element: <Booking/>
    },
  ]


  return (  
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        {routerStructure.map((page) => {
          return <Route path={page.path} element={<UniformLayout content={page.element}/>} />
        })}
      </Routes>
    </Router>
  );
}

export default CommonRouter;