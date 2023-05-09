import styled from "styled-components";
import { devices } from "../../styles/devices";
import { roboto, glory, hachi, poppins, raleway } from '../../styles/fonts';

const Container = styled.div`
display: flex;
flex-direction: column;

background-color: ${({ theme }) => theme.colors.lightWhite1}};
margin:1rem;
@media ${devices.tablet} {
  flex-direction: row;
  margin:2rem;
};
@media ${devices.tabletS} {
  margin:2rem;
};
@media ${devices.mobileS} {
  margin : 1rem;
};
`;

const Panel = styled.div`
  height: 100%;
  display: flex;
  padding:2rem;
`;

const SidePanel = styled(Panel)`
padding: 3rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.lightWhite1};}}};
  display: flex;
  flex-direction: column;
  // width:20rem;
  // min-height: 100vh;
  justify-content: flex-start;
  `;

const PrimaryPanel = styled(Panel)`
  // background-color: ${({ theme }) => theme.colors.lightWhite2}};
  // min-height: 100vh;
  flex-direction: column;
  overflow-x: auto;
  flex:1;
`;


interface ButtonProps {
    primary: boolean;
    fontBig?: boolean;
  }
const Button = styled.button<ButtonProps>`
${glory.style}
  background: ${({ theme, primary, fontBig }) => primary 
    ? theme.colors.secondaryDark
    : theme.colors.primaryColor};

  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: ${({ fontBig }) => fontBig ? '5rem' : '2rem'};
//   margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 3px;
  `;



  const Typography = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 3px;
    `;




export { Container, SidePanel, PrimaryPanel }