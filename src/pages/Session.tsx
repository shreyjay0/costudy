import React from "react";
import { useParams, useHistory } from "react-router-dom";

const Session = () => {
  const { type } = useParams<{ type?: string }>();

  return (
    <div>
      Let's get Started!
      <div></div>
    </div>
  );
};

export default Session;
