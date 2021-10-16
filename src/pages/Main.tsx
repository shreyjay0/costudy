import React from "react";
import Find from "../components/Find/Find";
import Review from "../components/Review/Review";
import Intro from "../components/Intro";
const Main = () => {
  return (
    <div>
      <div>
        <Intro />
        <Find />
        <Review />
      </div>
    </div>
  );
};

export default Main;
