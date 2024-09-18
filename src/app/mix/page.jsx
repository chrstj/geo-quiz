import React from "react";
import { flagData } from "../../../public/data";
import Quiz from "../components/Quiz";

const Mix = () => {
  if (!flagData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Blanding av alle verdens flagg</h1>
      <Quiz continentFlags={flagData} isMixMode={true} />
    </div>
  );
};

export default Mix;
