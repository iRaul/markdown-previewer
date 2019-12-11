import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${props =>
      props.theme.mode === 'dark' ? '#222' : '#edf2f7'};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color .3s ease;
  }
`

export default GlobalStyle
