import React from "react";

import { Home } from "./components/home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};
