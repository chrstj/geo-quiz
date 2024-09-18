import React from "react";
import { flagData } from "../../../public/data";
import Quiz from "../components/Quiz";

const North_America = () => {
  if (!flagData) {
    return <div>Loading...</div>;
  }

  const n_americaFlags = flagData.filter(
    (country) => country.continent === "North America"
  );

  return (
    <div>
      <h1>Nord-Amerika</h1>
      <Quiz continentFlags={n_americaFlags} />
    </div>
  );
};

export default North_America;
