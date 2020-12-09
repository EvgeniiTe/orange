import styled, { createGlobalStyle } from 'styled-components';
import { Container } from 'react-bootstrap';

const orangeColor = '#ff7900';

export const fontMainColor = '#1d6157';
export const fontLightColor = '#fff';
export const backgroundMainColor = '#f8f9fa';
export const backgroundStressColor = orangeColor;
export const boxShadowMain = '0 1px 10px #909090';
export const boxMainProps = '1px solid #d7e6e6';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html, body, #root {
    height: 100%;
}

body {
    font-family: 'Open Sans', 'Times New Roman', sans-serif;
    color: ${fontMainColor};
}

a {
    text-decoration: none;
    color: ${fontMainColor};
    :hover {
        text-decoration: none;
        color: red;
    }
}
`;

export const App = styled(Container)`
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const ContentContainer = styled.main`
  flex-grow: 1;
  background-color: ${backgroundMainColor};
  margin: 0;
`;

export const HeaderFooterContainer = styled.div`
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  padding: 5rem 1rem;
  color: ${fontLightColor};
  margin: auto;
`;
