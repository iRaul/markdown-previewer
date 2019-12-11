import React from 'react'
import styled from 'styled-components'

const Textarea = styled.textarea`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 15px;
  padding: 15px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.08);
  border: none;
  outline: none;
  resize: none;

  &:focus {
    border-color: #555;
  }
`

const Markdown = ({ value, onChange }) => {
  return <Textarea value={value} onChange={onChange} />
}

export default Markdown
