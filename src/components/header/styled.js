import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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


/* sm-размер (<=768px) */
@media (max-width: 767px) { 
  font-size: 1rem;
}
`;

export const HeaderContainer = styled(HeaderFooterContainer)`

/* sm-размер (<=768px) */
@media (max-width: 767px) { 
  padding-top: ${decorBorderSize}px;
}
  
`;

export const HeaderRow = styled(Row)`
  min-height: 13rem;
  padding-bottom: 3rem;
  width: 100%;
  margin: auto;
`;

export const CompanyName = styled(Col)`
  align-self: flex-end;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;

export const CompanyMotto = styled(Col)`
align-self: flex-end; 
text-align: center;
`;

export const CompanyLogo = styled(Col)`
align-self: center;
text-align: center;
`;
