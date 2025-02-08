import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./components/MainPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MainPage />
    </>
  );
}

export default App;
