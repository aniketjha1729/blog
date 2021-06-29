import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/SideBar";
import Posts from "../../components/posts/Posts";

import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
