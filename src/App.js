import "./styles/styles.css";
import MainContent from "./components/MainContent";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="grid grid--layout">
      <Nav />
      <MainContent />
    </div>
  );
}

export default App;
