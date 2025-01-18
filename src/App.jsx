import React from "react";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import MainContent from "./components/MainContent";
import RightPanel from "./components/RightPanel";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Navbar />
    <LeftMenu />
    <MainContent />
    <RightPanel />
    <Footer />
  </div>
);

export default App;
