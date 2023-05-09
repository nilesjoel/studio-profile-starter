import styled from 'styled-components';

interface TypographyProps {
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    menu?: boolean;
    menuHeading?: boolean;
    heading?: boolean;
  }
  const Typography = styled.div<TypographyProps>`
    display: flex;
    // font-weight: 400;
    line-height: 1.5;
    max-width: ${({ small, large, menu,heading, menuHeading}) => {
        if (small) return '30rem';
        if (large) return '30rem';
        return '100%';
      }};
    font-weight: ${({ small, large, menu,heading, menuHeading }) => {
      if (small) return '600';
      if (large) return '600';
      if (menu) return '600';
      if(menuHeading) return '900';
      if (heading) return '700';
      return '400';
    }};
    text-decoration: ${({ small, large, menu,heading, menuHeading }) => {
        if (small) return 'none';
        if (large) return 'none';
        if (menu) return 'none';
        if(menuHeading) return 'underline';
        if (heading) return 'none';
        return 'none';
    }};
    padding: 0.5rem 0;
    font-size: ${({ small, medium, large, menu,heading, menuHeading }) => {
      if (small) return '1rem';
      if(medium) return '1.5rem';
      if (large) return '2rem';
      if (menu) return '1rem';
      if(menuHeading)   return '1.2rem';
      if (heading) return '2rem';
      return '1.25rem';
    }};`


    export { Typography };