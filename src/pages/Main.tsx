import React from "react";
import Find from "../components/Find/Find";
import Review from "../components/Review/Review";
import Intro from "../components/Intro";
import JoinRoom from "../components/JoinRoom";
import Login from "../components/Login";
const Main = () => {
  return (
    <div className="outer-main">
      <div>
        <Login />
        <Intro />
        <Find />
        <Review />
        <JoinRoom />
      </div>
    </div>
  );
};

export default Main;
