import React from "react";
import "./App.css";
import { Header } from "./layout/header/Header";
import { FormSection } from "./layout/form-section/FormSection";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="wrapper">
        <main>
          <FormSection />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
