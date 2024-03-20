import styled from "styled-components"

export const ContainerHome = styled.section`
  background: url('/banner-home.png') center;
  width: 100%;
  min-height: 95vh;
  background-size: cover;



`

export const ContentHome = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  padding: 14rem 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.5rem;

  p{
    max-width: 650px;
    font-size: 2rem;
  }

  button{
    background-color: var(--secondary-color);
  }
`