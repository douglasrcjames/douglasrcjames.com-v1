import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import ScrollToTop from "../src/ScrollToTop"; // Fixed bug where pages would start in middle

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// CSS
import "./assets/css/Header.css";
import "./assets/css/Footer.css";
import "./assets/css/Text.css";
import "./assets/css/Align.css";
import "./assets/css/Images.css";
import "./assets/css/Forms.css";
import "./assets/css/Buttons.css";
import "./assets/css/Timeline.css";
import "./assets/css/Misc.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header/>
        <div className="wrapper">
          <Routes/>
        </div>
        <Footer/>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
