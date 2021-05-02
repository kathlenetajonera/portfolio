import "./styles/styles.css";
import Header from "./components/Header";
import { useState } from "react";
import MainContent from "./components/MainContent";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MainContent isMenuOpen={isMenuOpen} />
    </>
  );
}

export default App;
