import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

export const MainContainer = styled(Container)`
  max-width: 1366px;
  margin: 0 auto;
  padding: 1rem 0;
`;

export const StyledRow = styled(Row)`
  border-bottom: 1px solid grey;
  padding: 1rem 0;

  :hover {
    transform: scale(1.03);
    transform-origin: 50% 50%;
    transition: transform 1s ease;
  }
`;
