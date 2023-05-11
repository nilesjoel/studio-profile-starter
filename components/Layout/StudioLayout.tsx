import React from "react";
import { Main } from "./Main";
import { Footer } from "../Footer/Footer";


import { StyledLayout } from "./layout.elements";
import withAuth from "../Shared/withAuth";
import { ProfileHeader } from "../Header/ProfileHeader";


const StudioLayout = ({ children }) => {
  return (
    <StyledLayout>
      <ProfileHeader />
      <Main>
        {children}
      </Main>
      <Footer />
    </StyledLayout>
  );
};

export default withAuth(StudioLayout);
