import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ControlPanel = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
  
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  :hover {
    text-decoration: none;
    color: #fff;
  }
`;
