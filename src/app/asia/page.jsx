import React from "react";
import { flagData } from "../../../public/data";
import Quiz from "../components/Quiz";

const Asia = () => {
  if (!flagData) {
    return <div>Loading...</div>;
  }

  const asianFlags = flagData.filter((country) => country.continent === "Asia");

  return (
    <div>
      <h1>Asia</h1>
      <Quiz continentFlags={asianFlags} />
    </div>
  );
};

export default Asia;
