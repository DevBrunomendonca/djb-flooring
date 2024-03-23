import styled from 'styled-components'

export const ContainerServices = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  padding: 5rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media (max-width:768px) {
    padding: 2rem 1rem;
  }
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
  @media (max-width:768px) {
    gap: .75rem;
  }
`

export const ContainerCardsServices = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  padding-top: 2rem ;

  @media (max-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px){
    grid-template-columns: 1fr;
  }
`