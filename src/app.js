import React from "react";
import { Router, Link } from "@reach/router";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from './searchParam'
import Details from './Details'
const App = () => {
  
  return (
    <div>
    <header>
      <Link to="/">Adopt Me!</Link>
    </header>;
      {/* <h1>Adopt Me</h1> */}
      {/* <Pet name="Lina" animal="Dog" breed="Husk" />
      <Pet name="Lina" animal="Dog" breed="Husk" /> */}
      {/* <SearchParams /> */}

      <Router>
      <SearchParams path="/" />
       <Details path="/details/:id" />
      </Router>

    </div>
  );
};

render(<App />, document.getElementById("root"));
