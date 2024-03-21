import styled from 'styled-components'

export const ContainerCardService = styled.div`
width: 100%;
  img{
    width: 100%;
}
`

export const ContainerTextCard = styled.div`
  background-color: var(--secondary-color);
  width: 90%;

  padding: 1rem 2rem;
  margin-top: -10rem;
  z-index: 99;
  position: relative;

  p{
    font-size: 1.6rem;
    padding-top: .5rem;
  }
`
export const ListCard = styled.ul`
  padding: 1.5rem 0 0 1.5rem;

  li{
    font-size: 1.6rem;
    color: var(--third-color);
  }
`

