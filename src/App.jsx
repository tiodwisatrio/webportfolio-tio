import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import React, { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   const disableContextMenu = (event) => {
  //     event.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", disableContextMenu);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableContextMenu);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
