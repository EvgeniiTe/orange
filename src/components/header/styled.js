import styled from 'styled-components';
import { HeaderFooterContainer, backgroundStressColor } from '../app/styled';

export const Header = styled.header`
  background-color: #000;
  margin: 0;
`;

const decorBorderSize = 100;

export const DecorativeEl = styled.div`
  background-color: #000;
  margin: 0;
  width: 0;
  height: 0;
  border-top: ${decorBorderSize}px solid ${backgroundStressColor};
  border-left: ${decorBorderSize}px solid ${backgroundStressColor};
  border-right: 600px solid transparent;
  position: absolute;
  top: 0;
  left: 0;

  /* sm-размер (<=768px) */
  @media (max-width: 767px) { 
    border-right: 250px solid transparent;
  }
`;

export const Wellcome = styled.div`
content: "HI! Glad to see YOU!";
position: absolute;
color: #fff;
font-weight: bold;
font-size: 2rem;
top: 1rem;
left: 1rem;
// transform: translate(300%, 100%);
`;

export const HeaderContainer = styled(HeaderFooterContainer)`
  min-height: 13rem;
  padding-bottom: 3rem;
`;

export const CompanyName = styled.div`
  align-self: flex-end;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const CompanyMotto = styled.div`
align-self: flex-end; 
`;

export const CompanyLogo = styled.div`
align-self: center;
`;
