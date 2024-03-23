import styled from "styled-components"

export const ContentTitle = styled.h1 `
  color: var(--secondary-color);
  font-weight: 300;
  font-size: 6rem;
  max-width: 800px;
  text-align: start;

  @media (max-width: 480px) {
    font-size: 4.5rem;
  }
`