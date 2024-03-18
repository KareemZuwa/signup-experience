import React from "react";
import "./App.css";
import { Header } from "./layout/header/Header";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
