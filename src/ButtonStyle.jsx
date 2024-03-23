import styled from "styled-components"

export const ContentBtn = styled.button`
  background-color: var(--primary-color);
  padding: 1.5rem 2rem;
  border: none ; 
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--third-color);
  font-weight: 400;
  font-size: 1.6rem;
  cursor: pointer;
  img {
    width: 20px;
  }
  @media (max-width: 480px) {
    padding: 1.2rem 3rem;
  }
`