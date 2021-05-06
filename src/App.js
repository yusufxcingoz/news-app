import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavButtons from "./components/NavButtons";
import { useState, useEffect } from "react";
import db from "./firebase";
import NavCards from "./components/NavCards";
import MainCarousel from "./components/MainCarousel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [step, setStep] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    db.collection("news").onSnapshot((snapshot) =>
      setNews(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div class="flex flex-col m-auto max-w-7xl">
      <Header />
      <Hero />
      <NavButtons setStep={setStep} step={step} />
      <NavCards data={news} step={step} />
      <MainCarousel data={news} />
    </div>
  );
}

export default App;
