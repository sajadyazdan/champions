import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./components/MainPage";
import SecondHeader from "./components/SecondHeader/SecondHeader";
import NewsTicker from "./components/NewsTicker/NewsTicker";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <NewsTicker />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <SecondHeader />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MainPage />
    </>
  );
}

export default App;
