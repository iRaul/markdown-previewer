import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
	font-family: 'IBM Plex Sans', sans-serif;
	margin-bottom: 40px;
`

const Title = styled.h1`
	margin-bottom: 10px;
	font-size: 30px;
`

const Subtitle = styled.p`
	margin-top: 0;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.8);
`

const Header = () => {
	return (
		<Wrapper>
			<Title>Markdown Preivewer</Title>
			<Subtitle>Built with React </Subtitle>
		</Wrapper>
	)
}

export default Header
