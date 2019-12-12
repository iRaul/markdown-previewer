import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  font-family: 'IBM Plex Sans', sans-serif;
  margin-bottom: 40px;
  margin-top: 30px;
`

const Title = styled.h1`
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 30px;
  color: ${({ theme }) => theme.header.title};
`

const Subtitle = styled.p`
  margin-top: 0;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  color: ${({ theme }) => theme.header.subtitle};
`

const Header = () => {
  return (
    <Wrapper>
      <Title>Markdown Previewer</Title>
      <Subtitle>Built with React </Subtitle>
    </Wrapper>
  )
}

export default Header
