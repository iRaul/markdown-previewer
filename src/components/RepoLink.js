import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

const RepoLink = () => {
  return (
    <Link href='https://github.com/iRaul/markdown-previewer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        strokeLinejoin='round'
        strokeMiterlimit='1.414'
        ariaLabel='github'
        clipRule='evenodd'
        viewBox='0 0 32 32'
      >
        <path d='M18.837 27.966C27.179 27.725 28 25.969 28 16 28 5 27 4 16 4S4 5 4 16c0 9.995.826 11.734 9.228 11.968a.503.503 0 00.1-.321c0-.25-.01-2.816-.015-3.699-3.037.639-3.678-1.419-3.678-1.419-.497-1.222-1.213-1.548-1.213-1.548-.991-.656.075-.643.075-.643 1.096.075 1.673 1.091 1.673 1.091.974 1.617 2.556 1.15 3.178.879.099-.683.381-1.15.693-1.414-2.425-.267-4.974-1.175-4.974-5.23 0-1.155.426-2.099 1.124-2.839-.113-.268-.487-1.344.107-2.8 0 0 .917-.285 3.003 1.084a10.755 10.755 0 012.734-.356c.927.004 1.861.121 2.734.356 2.085-1.369 3-1.084 3-1.084.596 1.456.221 2.532.108 2.8.7.74 1.123 1.684 1.123 2.839 0 4.065-2.553 4.96-4.986 5.221.392.327.741.973.741 1.96a1298.915 1298.915 0 01-.013 4.802c0 .109.029.224.095.319z'></path>
      </svg>
    </Link>
  )
}

export default RepoLink
