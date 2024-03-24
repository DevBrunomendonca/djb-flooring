import styled from "styled-components";

export const ContainerThumtack = styled.div`
  margin: 0 0 0 auto;
  max-width: 640px;
  padding: 5rem 1rem;
  display: flex;
  align-items: center;

  width: 50%;

  div {
    max-width: 200px;
  }

  @media (max-width:768px) {
    width: 100%;
    max-width: none;
    padding: 1rem;
  }
  
  button{
    margin-top: 2rem;
  }

  img{
    width: 60%;
  }
`