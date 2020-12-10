import styled, { keyframes } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { orangeColor } from '../app/styled';

export const MainContainer = styled(Container)`
  max-width: 1366px;
  padding: 1rem 0;

  /* sm-размер (<=768px) */
  @media (max-width: 767px) { 
      padding: 1rem 2rem;
  }
`;

const shadowForRow = `2px 2px 15px ${orangeColor}`;

const shadowAppearance = keyframes`
  from {
    box-shadow: 0 1px 1px grey;
  }
  to {
    box-shadow: ${shadowForRow};
  }
`;

export const StyledRow = styled(Row)`
  border-bottom: 1px solid grey;
  padding: 1rem 0;
  min-height: 7rem;

  :hover {
    animation-name: ${shadowAppearance};
    animation-duration: 0.8s;
    animation-timing-function: ease;
    box-shadow: ${shadowForRow};
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

  /* sm-размер (<=768px) */
  @media (max-width: 767px) { 
    text-align: center;
  }
`;

export const StyledColStressFont = styled(StyledCol)`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const ParentInfoRow = styled(Row)`
  padding: 1rem 0;
  border: 3px solid green;
  margin-bottom: 1rem

`;
