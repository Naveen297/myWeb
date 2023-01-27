import React from "react";
import Cards from "../components/cards";
import Footer from "../components/footer";
import Exp from "../components/exp";
import Header from "../components/header";
import Hero from "../components/Hero";
import Skills from "../components/skills";
import Message from "../components/message";

const Mainpage = () => {
  return (
    <div className="bg-white">
      <div>
        <Header />
      </div>

      <div>
        <Hero />
        <Skills />
        <Exp />
        <Cards />
        <Message />
      </div>
      <Footer />
    </div>
  );
};

export default Mainpage;
