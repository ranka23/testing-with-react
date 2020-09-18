import React from "react";
import Header from "./components/header";
import HeadLine from "./components/headline/index";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine header="Post" desc="Click the button to render posts" />
      </section>
    </div>
  );
}

export default App;
