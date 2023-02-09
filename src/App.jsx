import { useState } from "react";
import { Navbar, Hero, Footer } from "./components";
import { hero, navlinks } from "./data/traveldata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Footer />
    </>
  );
}

export default App;
