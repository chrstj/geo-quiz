import React from "react";
import { flagData } from "../../../public/data";
import Quiz from "../components/Quiz";

const Africa = () => {
  if (!flagData) {
    return <div>Loading...</div>;
  }

  const africanFlags = flagData.filter(
    (country) => country.continent === "Africa"
  );

  return (
    <div>
      <h1>Afrika</h1>
      <Quiz continentFlags={africanFlags} />
    </div>
  );
};

export default Africa;
