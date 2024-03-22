import styled from "styled-components";

export const ContainerComments = styled.section`
  background-color: var(--secondary-color);

  display: flex;
  align-items: center;
  gap: 5rem;

`

export const ContentComments = styled.div`
  margin: 0 auto 0 0;
  max-width: 640px;
  padding: 5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

`

export const CardComments = styled.div`
  
  width: 100%;
  
  
`

export const ContentCardComments = styled.div`
  background-color: var(--primary-color);
  padding: 2rem 3rem;
  margin-top: 2rem;
  

  div{
    display: flex;
    align-items: center ;
    gap: 1.5rem;
  }
  div>img{
    width: 50px;
  }
  p{
    padding-top: 3rem;
  }

`