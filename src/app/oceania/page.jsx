import React from "react";
import { flagData } from "../../../public/data";
import Quiz from "../components/Quiz";

const Oceania = () => {
  if (!flagData) {
    return <div>Loading...</div>;
  }

  const oceaniaFlags = flagData.filter(
    (country) => country.continent === "Oceania"
  );

  return (
    <div>
      <h1>Oseania</h1>
      <Quiz continentFlags={oceaniaFlags} />
    </div>
  );
};

export default Oceania;
