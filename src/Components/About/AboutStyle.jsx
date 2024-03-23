import styled from "styled-components"

export const ContainerAbout = styled.section`
  background-color: var(--secondary-color);
  min-height: 900pxs;
`

export const ContentAbout = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1rem 5rem;
  
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px){
    flex-direction: column;
    gap: 3rem;
    padding: 0 1rem 2rem;
  }
`

export const ContentTextAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;

  p{
    color: var(--third-color);
    max-width: 500px;
  }

  button{
    padding: 2rem 8rem;
    @media (max-width: 480px) {
      padding: 1.2rem 8rem;
    }
  }
`

export const ContentBannerAbout = styled.div`
  width: 100%;

  img{
    width: 100%;
  }
`