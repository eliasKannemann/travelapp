import { useState } from "react";
import { Navbar, Hero, Footer, Memory } from "./components";
import { hero, navlinks, memory } from "./data/traveldata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Footer />
    </>
  );
}

export default App;
