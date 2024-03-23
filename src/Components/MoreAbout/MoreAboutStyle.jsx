import styled from "styled-components"

export const ContainerMoreAbout = styled.section`
  background-color: var(--secondary-color);
  padding: 5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px){
    padding: 2rem 1rem;
  }

`

export const ContentTextMoreAbout = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1rem;
  text-align: center;

  h2{
    padding-bottom: 1rem;
    @media (max-width: 768px){
      padding-bottom: 0;
    }
  }

  p{
    color: var(--third-color);
    padding-top: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
    @media (max-width:768px) {
      padding-top: .75rem;
  }
  }
`

export const ContentBannerMoreAbout = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1rem;
  width: 100%;
`

export const CardImg = styled.div`
  width: 100%;

img {
  width: 100%;
}
`