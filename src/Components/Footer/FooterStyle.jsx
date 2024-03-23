import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  background-color: var(--secondary-color);
  margin-top: 5rem;
  padding: 5rem 1rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }
`

export const ContentFooter = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;

  @media(max-width:768px){
    flex-direction: column;
    align-items: center;
    
    div{
      align-items: center;
      text-align: center;
      
    }
  }
`


export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  max-width: 400px;
`

export const ContainerOurService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: .5rem;
  h3{
    margin-bottom: 1.5rem;
  }
`

export const ContaineLinks = styled.div`
  
  div{
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
}
`

export const Copyright = styled.h4`
  font-size: 2rem;
  font-weight: 400;
  color: var(--third-color);
  text-align: center;

  margin-top: 5rem;


`