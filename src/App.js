import React from "react";
import { ThemeProvider } from "styled-components";
import { Globals } from "./components/styled/Globals.styled";
import { theme } from "./components/styled/Theme.styled";
import Header from "./components/sections/Header";
import UseVidcoin from "./components/sections/UseVidcoin";
import ChooseVidcoin from "./components/sections/ChooseVidcoin";
import Instructions from "./components/sections/Instructions";
import News from "./components/sections/News";
import OurExperts from "./components/sections/OurExperts";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <Header />
      <UseVidcoin />
      <ChooseVidcoin />
      <Instructions />
      <OurExperts />
      <News />
      <Footer />
    </ThemeProvider>
  );
}
