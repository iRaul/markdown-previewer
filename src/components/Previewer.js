import styled from 'styled-components'

const Previewer = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  background-color: ${({ theme }) => theme.previewer.background};
  color: ${({ theme }) => theme.previewer.color};
  border-radius: 4px;
  padding: 15px;

  p {
    line-height: 1.5;
  }

  a {
    color: ${({ theme }) => theme.previewer.links};
  }
`

export default Previewer
