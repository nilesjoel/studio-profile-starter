import styled from 'styled-components';


import { roboto, glory, hachi, poppins, raleway } from '../../styles/fonts';

const Container = styled.div`
    display: flex;
    flex-direction:row;
    padding: 0.5em 2em;
`

interface HeaderBarProps {
  isDark: boolean;
}

interface HeaderMenuProps {
  clicked: boolean;
}

export const HeaderBar = styled.nav<HeaderBarProps>`
  ${glory.style}
    background-color:${({ theme }) => theme.colors.secondaryDark};

   height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex: 0 0 100%;
  justify-content: space-between;
  align-items: center;
//   background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: #fff;
  padding: 0 1rem;
`;

export const HeaderLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
//   font-size: 2rem;
  display: flex;
  align-items: center;
`;

// export const HeaderIcon = styled(FiSun)`
//   margin-right: 0.5rem;
// `;

export const HeaderIcon = styled.div`
 
`;

export const MobileIcon = styled.div`
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

export const HeaderMenu = styled.ul<HeaderMenuProps>`
${raleway.style}
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  //  background: ${({ theme, clicked }) => (clicked ? theme.colors.secondaryDark : theme.colors.primaryColor)};

  @media screen and (max-width: 960px) {
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

export const HeaderItem = styled.li`
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
    background-color:${({ theme }) => theme.colors.primaryColor};
    &:hover {
      border: none;
    }
  }

  `;

export const HeaderItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  color:${({ theme }) => theme.colors.darkColor};
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

export const HeaderBtnLink = styled.div`
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


export const  StyledNav = styled.nav`
padding:1rem;
`;