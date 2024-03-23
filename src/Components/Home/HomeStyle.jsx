import styled from "styled-components"

export const ContainerHome = styled.section`
  background: url('/banner-home.png') center;
  width: 100%;
  min-height: 95vh;
  background-size: cover;

  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    min-height: 90vh;
  }
`

export const ContentHome = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  padding: 0 1rem;
  margin-top: -6rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;

  p{
    max-width: 650px;
    font-size: 2rem;
    color: var(--secondary-color);
  }

  button{
    background-color: var(--secondary-color);
  }
`