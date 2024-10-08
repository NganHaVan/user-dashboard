import Header from "./components/header/Header";
import React, { Suspense } from "react";
import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";

const UserDashboard = React.lazy(
  () => import("./pages/userDashboard/UserDashboard")
);

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Suspense
          fallback={
            <div style={{ textAlign: "center" }}>
              <h4>Loading...</h4>
            </div>
          }
        >
          <UserDashboard />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
