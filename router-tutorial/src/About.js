import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams] = useSearchParams();
  const showDetail = searchParams.get("detail") === "true";

  return (
    <div>
      <h1>About</h1>
      <p>This is the About page.</p>
      {showDetail && <p>detail: true</p>}
    </div>
  );
};

export default About;
