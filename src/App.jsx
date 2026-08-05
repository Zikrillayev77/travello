import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Destinations from "./Components/Destinations";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
    </div>
  );
};

export default App;
