import { useState } from "react";
import { Navbar, Hero, Footer, Memory, Explore } from "./components";
import { hero, navlinks, memory, placesAPI } from "./data/traveldata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="explore the world" placesAPI={placesAPI} />
      <Footer />
    </>
  );
}

export default App;
