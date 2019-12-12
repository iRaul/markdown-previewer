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
    'Heading\n=======\n\nSub-heading\n-----------\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
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
