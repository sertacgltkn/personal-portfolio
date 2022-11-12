import React from "react";
import "./Layout.css";
import PP from "../../assets/PP.png";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="layout__right">
          <div className="layout__right__top">
            <img className="profile_pic" src={PP} alt="profile pic" />
          </div>
          <div className="layout__right__bottom">
            <h2>Personal Portfolio Project</h2>
            <h1>Sertaç Gültekin</h1>
            <h3>Jr. Frontend Developer</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
