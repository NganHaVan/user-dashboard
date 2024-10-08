import Header from "./components/header/Header";
import React from "react";
import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Content</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
