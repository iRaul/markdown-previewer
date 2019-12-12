import React from 'react'
import styled from 'styled-components'

const Textarea = styled.textarea`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 15px;
  padding: 15px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.markdown.background};
  color: ${({ theme }) => theme.markdown.color};
  border: none;
  outline: none;
  resize: none;
  line-height: 1.5;
  min-height: 500px;

  &:focus {
    box-shadow: inset 0px 0px 0px 1px ${({ theme }) => theme.markdown.border};
  }
`

const Markdown = ({ value, onChange }) => {
  return <Textarea value={value} onChange={onChange} />
}

export default Markdown
