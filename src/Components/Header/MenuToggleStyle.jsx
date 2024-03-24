import styled, { css, keyframes } from "styled-components";

export const ContainerMenuToggle = styled.div`
display: none;
z-index: 100;
animation: ease-in-out .4s;
@keyframes showMenu {
  from{
    opacity: .5;
    height: 120px;
  }to{
    opacity : 1;
    height: 285px;
  }
}
@keyframes showBtn {
  from{
    opacity: 0;
    transform: translatey(-80px);
  }to{
    opacity : 1;
    transform: translatey(0);
  }
}


${({openMenu}) => openMenu && css`
  background-color: var(--secondary-color);
  width: 100%;
  height: 285px;
  position: absolute;
  top: 30px;
  left: 0;
  display: block;
  animation: showMenu ease-in-out .6s;

  div, button {
    animation: showBtn ease-in-out 1s;
  }
  flex-direction: column; 
  padding: 5rem 1rem 2rem;
  div {
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 3.5rem;

  }
  div>a{
    font-size: 2.2rem;
    border-bottom: 1px solid rgba(94, 94, 94, 0.6);
  }
`
}

`