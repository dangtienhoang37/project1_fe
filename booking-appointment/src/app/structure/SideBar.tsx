import React from "react";
import { logo } from "../../assets/image";
import { Link } from "react-router-dom";

function Sidebar() {

  const links = [
    {
      href: "/",
      name: "Trang chủ"
    },
    {
      href: "/booking",
      name: "Đặt lịch hẹn"
    },
  ]

  const getSectionUrl = () => {
    const defaultUrl = 'http://localhost:5173'
    const lng = defaultUrl.length;
    const currentUrl = window.location.href;
    return currentUrl.substring(lng)
  }

  const activeClass = (href) => {
    if(href === getSectionUrl()) {
      return "active"
    }
    return "";
  }

  return (  
    <div id="main-sidebar">
      <div className="main-sidebar-logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="main-sidebar-items">
        {
          links.map((item) => {
            return <Link className={`main-sidebar-item ${activeClass(item.href)}`} to={item.href}>{item.name}</Link>
          })
        }
      </div>
    </div>
  );
}

export default Sidebar;