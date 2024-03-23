import styled from "styled-components";

export const ContainerComments = styled.section`
  background-color: var(--secondary-color);

  display: flex;
  align-items: center;
  gap: 5rem;

  @media (max-width:768px) {
    flex-direction: column;
    gap: 1rem;
  }

`

export const ContentComments = styled.div`
  margin: 0 auto 0 0;
  max-width: 640px;
  padding: 5rem 1rem;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

  @media (max-width:768px) {
    width: 100%;
    max-width: none;
    padding: 1rem;
  }

`

export const CardComments = styled.div`
  width: 100%;
  padding: 0 1rem;
`

export const ContentCardComments = styled.div`
  background-color: var(--primary-color);
  padding: 2rem 3rem;
  margin-top: 2rem;
  width: 100%;

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