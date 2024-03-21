import styled from 'styled-components'

export const ContainerServices = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  padding: 5rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`

export const ContainerTextServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  h2, p{
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
  }
`

export const ContainerCardsServices = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  padding-top: 2rem ;
`