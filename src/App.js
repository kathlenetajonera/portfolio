import { useState } from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Nav from "./components/nav/Nav";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="grid grid--layout">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Nav isMenuOpen={isMenuOpen} />
      <MainContent />
    </div>
  );
}

export default App;
