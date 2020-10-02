import React from "react";
import "./App.css";
import Footer from './footer';
import Header from './header';
import Odometer from "./odometer";

function App() {
  return (
    <div id = "background">
      <Header hello = "Hello" />
      <Odometer />
      <Footer trademark = "Odometer"/>
    </div>
  );
}
export default App;

