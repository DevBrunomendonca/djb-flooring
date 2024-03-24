import styled, { css } from 'styled-components'

export const ContentGoToTop = styled.img`
  position: fixed;
  bottom: 100px;
  right: 70px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: none;
  transition: ease-in-out .5s;
  opacity: 0;
  z-index: 100;
  @media (max-width:480px) {
    bottom: 30px;
    right: 10px;
    width: 40px;
  height: 40px;
  }

  ${({showGoToTop}) => showGoToTop && css`
  display: flex;
  opacity: 1;
  transition: ease-in-out .5s;
  `}
`