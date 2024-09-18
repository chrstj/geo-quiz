import React from "react";
import { flagData } from "../../../public/data";
import Quiz from "../components/Quiz";

const Europe = () => {
  if (!flagData) {
    return <div>Loading...</div>;
  }

  const europeFlags = flagData.filter(
    (country) => country.continent === "Europe"
  );

  return (
    <div>
      <h1>Europa</h1>
      <Quiz continentFlags={europeFlags} />
    </div>
  );
};

export default Europe;
