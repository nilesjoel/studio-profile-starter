import React from "react";
import { Header } from "../Header/Header";
import { Main } from "./Main";
import { Footer } from "../Footer/Footer";


import { StyledLayout } from "./layout.elements";
import withAuth from "../Shared/withAuth";


const StudioLayout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </StyledLayout>
  );
};

export default withAuth(StudioLayout);
