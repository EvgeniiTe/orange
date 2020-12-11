import styled from 'styled-components';
import { HeaderFooterContainer, backgroundStressColor } from '../app/styled';

import { CompanyName } from '../header/styled';

export const Footer = styled.footer`
  background-color: ${backgroundStressColor};
  margin: 0;
  flex-shrink: '0' 
`;

export const FooterContainer = styled(HeaderFooterContainer)`
  flex-direction: column;
  min-height: 10rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  align-items: center;
`;

export const Copyright = styled.div`

`;

export const CompanyNameFooter = styled(CompanyName)`
  align-self: center;
`;
