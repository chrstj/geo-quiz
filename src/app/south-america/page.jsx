import React from "react";
import { flagData } from "../../../public/data";
import Quiz from "../components/Quiz";

const South_America = () => {
  if (!flagData) {
    return <div>Loading...</div>;
  }

  const s_americaFlags = flagData.filter(
    (country) => country.continent === "South America"
  );

  return (
    <div>
      <h1>Sør-Amerika</h1>
      <Quiz continentFlags={s_americaFlags} />
    </div>
  );
};

export default South_America;
