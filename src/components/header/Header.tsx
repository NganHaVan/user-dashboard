import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`${styles.header} center-text`}>
      <h1>User dashboard</h1>
    </header>
  );
}
