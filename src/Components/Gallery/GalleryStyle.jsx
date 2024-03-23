import styled from "styled-components";

export const ContainerGallery = styled.section`
  background-color: var(--secondary-color);
  padding: 5rem 1.5rem ;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem ;
  }

`
export const ContentGallery = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  padding-top: 2rem;
  width: 100%;

  img{
    width: 100%;
    cursor: pointer;
  }
  @media (max-width:480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`