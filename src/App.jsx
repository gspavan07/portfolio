import { useState } from "react";
import reactLogo from "/dev.svg";
import logo from "/logo.svg";
import Navbar from "./components/Navbar";
import Hero from "./screens/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#090E16] md:px-40 py-10 h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
