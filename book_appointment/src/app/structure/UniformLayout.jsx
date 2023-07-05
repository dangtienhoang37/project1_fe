import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";
import "./index.scss";

function UniformLayout({ content }) {
  return (  
    <div id="booking-app-main">
      <div className="booking-app-side-bar">
        <Sidebar/>
      </div>
      <div className="booking-app-content">
        <div className="booking-app-content-header">
          <Header/>
        </div>
        <div className="booking-app-content-main">
          {content}
        </div>
      </div>
    </div>
  );
}

export default UniformLayout;