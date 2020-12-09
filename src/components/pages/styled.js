import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export const MainContainer = styled(Container)`
  max-width: 1366px;
  padding: 1rem 0;
`;

export const StyledRow = styled(Row)`
  border-bottom: 1px solid grey;
  padding: 1rem 0;
  min-height: 7rem;

  :hover {
    transform: scale(1.03);
    transform-origin: 50% 50%;
    transition: transform 1s ease;
  }
`;

export const StyledHeadRow = styled(Row)`
  padding-bottom: 2rem;
  padding: 1rem 0;
  
  /* sm-размер (<=768px) */
  @media (max-width: 767px) { 
     display: none;
  }

`;

export const StyledCol = styled(Col)`
  margin: auto;
`;

export const ParentInfoRow = styled(Row)`
  padding: 1rem 0;
  border: 3px solid green;
  margin-bottom: 1rem

`;
