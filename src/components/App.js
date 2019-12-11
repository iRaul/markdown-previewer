import React, { useState, useEffect } from 'react'
import marked from 'marked'

import GlobalStyle from './Global'
import Container from './Container'
import Previewer from './Previewer'
import Markdown from './Markdown'
import Header from './Header'
import Main from './Main'

const App = () => {
	const [markdown, setMarkdown] = useState(
		'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
	)

	useEffect(() => {
		const data = localStorage.getItem('default-md')
		if (data) setMarkdown(data)
	}, [])

	useEffect(() => {
		localStorage.setItem('default-md', markdown)
	})

	return (
		<>
			<GlobalStyle />
			<Container>
				<Header />
				<Main>
					<Markdown
						value={markdown}
						onChange={e => setMarkdown(e.target.value)}
					/>
					<Previewer dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
				</Main>
			</Container>
		</>
	)
}

export default App
