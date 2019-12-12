import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import marked from 'marked'

import GlobalStyle from './Global'
import Container from './Container'
import Previewer from './Previewer'
import Markdown from './Markdown'
import Header from './Header'
import Toggle from './Toggle'
import Main from './Main'
import { MoonIcon, SunIcon } from './Icons'
import { light, dark } from './Theme'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [markdown, setMarkdown] = useState(
    'Heading\n=======\n\n---\n\nSub-heading\n-----------\n \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nOrdered list:\n\n  * item\n  * item\n  * item\n\nNumbered list:\n\n  1. item\n  2. item\n  3. item\n\n```javascript \nvar s = "JavaScript syntax highlighting";\n\nalert(s);\n``` \n\n*[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)*'
  )

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  useEffect(() => {
    const data = localStorage.getItem('default-md')
    if (data) setMarkdown(data)
  }, [])

  useEffect(() => {
    localStorage.setItem('default-md', markdown)
  })

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <>
        <GlobalStyle />
        <Container>
          <Header />
          <Toggle onClick={toggleTheme} theme={theme}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Toggle>
          <Main>
            <Markdown
              value={markdown}
              onChange={e => setMarkdown(e.target.value)}
            />
            <Previewer dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
          </Main>
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App
