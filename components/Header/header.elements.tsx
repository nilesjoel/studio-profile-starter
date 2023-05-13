import styled from 'styled-components';


import { roboto, glory, hachi, poppins, raleway } from '../../styles/fonts';
import { FiUsers } from 'react-icons/fi';

const Container = styled.div`
    display: flex;
    flex-direction:row;
    padding: 0.5em 2em;
`

interface HeaderBarProps {
  // isDark: boolean;
}
const HeaderBar = styled.nav<HeaderBarProps>`
  ${glory.style}
    background-color:${({ theme }) => theme.colors.secondaryDark};

  // height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0 1rem;
  color: #fff;
  
//   background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

const HeaderLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
//   font-size: 2rem;
  display: flex;
  align-items: center;
`;
const HeaderIcon = styled(FiUsers)`
// margin-right: 0.5rem;
// display: block;
// margin: 0 auto;
// width: 4.5em;
font-size: 2rem;
color: ${({ theme }) => theme.colors.primaryColor};
`;

// const HeaderIcon = styled.div`
 
// `;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    // position: absolute;
    // top: 0;
    // right: 0;
    // transform: translate(-100%, 60%);
    padding-right: 1rem;
    color:black;
    font-size: 1.8rem;
    cursor: pointer;
    z-index:100;
  }
`;


interface HeaderMenuProps {
  clicked: boolean;
}
const HeaderMenu = styled.ul<HeaderMenuProps>`
// ${raleway.style}
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  @media screen and (max-width: 960px) {
    background: ${({ theme, clicked }) => (clicked ? theme.colors.secondaryDark : theme.colors.primaryColor)};
    display: flex;
    flex-direction: column;  
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: ${({ clicked }) => (clicked ? 0 : '-100%')};
    opacity: .99;
    transition: all 0.5s ease;
  }
`;

const HeaderItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    /* border-bottom: 2px solid #4b59f7; */
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
  @media screen and (min-width: 960px) {
    width: 100%;
    // background-color:${({ theme }) => theme.colors.primaryColor};
    &:hover {
      border: none;
    }
  }

  `;

const HeaderItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  color: ${({ theme }) => theme.colors.darkColor};

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: ${({ theme }) => theme.colors.secondaryColor};
      transition: all 0.3s ease;
    }
  }
`;

const HeaderBtnLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

const StyledMenuContainer   = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const  StyledNav = styled.nav`
padding:1rem;
display:flex;
flex-direction:column;
`;

const SignedInStatus = styled.div`
display: block;
min-height: 4rem;
width: 100%;
`;

const AuthText = styled.span`
// position: absolute;
padding-top: 0.8rem;
margin: 0 .5rem;
// left: 1rem;
// right: 6.5rem;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
display: inherit;
z-index: 1;
line-height: 1.3rem;
`
const NotSignedInText = styled(AuthText)
const SignedInText = styled(AuthText)`
padding-top: 0rem;
// left: 4.6rem;
`

const AuthButton = styled.button`
float: right;
margin: 0.5rem;
font-weight: 500;
border-radius: 0.3rem;
cursor: pointer;
font-size: 1rem;
line-height: 1.4rem;
padding: 0.5rem;
position: relative;
z-index: 10;
background-color: transparent;
color: #555;
`

const ButtonPrimary = styled(AuthButton)`
background-color: #346df1;
  border-color: #346df1;
  color: #fff;
  text-decoration: none;
  padding: 0.7rem 1.4rem;

  :hover {
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.2);
  }
`

const ProfileAvatar = styled.span`
margin: 0 .5rem;
border-radius: 2rem;
height: 2.8rem;
width: 2.8rem;
background-color: white;
background-size: cover;
background-repeat: no-repeat;
z-index: 1;
`
const StyledHeaderLogo = styled.div`
display: flex;
width:5rem;
align-items: center;
justify-content: center;
`

const StyledIdentityPanel = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export {
  HeaderBar,
  HeaderContainer,
  HeaderLogo,
  HeaderIcon,
  MobileIcon,
  HeaderMenu,
  HeaderItem,
  HeaderItemBtn,
  HeaderLinks,
  HeaderBtnLink,
  StyledNav,
  SignedInStatus,
  NotSignedInText,
  SignedInText,
  AuthButton,
  ButtonPrimary,
  ProfileAvatar,
  AuthText,
  StyledHeaderLogo,
  StyledIdentityPanel,
  StyledMenuContainer
};