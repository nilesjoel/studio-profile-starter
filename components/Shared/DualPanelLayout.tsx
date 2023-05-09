import React from 'react';

import { Container, PrimaryPanel, SidePanel } from './studio.elements';


function DualPanelLayout({ leftPanel, rightPanel }) {
  return (
    <Container>
      <SidePanel>
        {leftPanel}
        {/* Content for the left panel goes here */}
      </SidePanel>
      <PrimaryPanel>
        {rightPanel}
        {/* Content for the right panel goes here */}
      </PrimaryPanel>
    </Container>
  );
}


export { DualPanelLayout };