import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  

  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Lina" animal="Dog" breed="Husk" />
      <Pet name="Lina" animal="Dog" breed="Husk" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
