import { createGlobalStyle } from 'styled-components'
import { convertPixelToRem } from 'css-blocks-styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['gray-800']};
  }

  body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${convertPixelToRem(16)};
  }
`
