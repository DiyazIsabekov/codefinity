import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div class="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
