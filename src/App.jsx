import { useState } from "react";
import {
  Navbar,
  Hero,
  Footer,
  Memory,
  Explore,
  Advertise,
  Pricings,
  Banner,
} from "./components";
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
} from "./data/traveldata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="explore the world" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Footer />
    </>
  );
}

export default App;
