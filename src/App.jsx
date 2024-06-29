import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../components/Navbar/Nav";
import Home from "../components/Home/Home";
import Proyects from "../components/Proyects/Proyects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Home />
      <Proyects />
    </div>
  );
}

export default App;
