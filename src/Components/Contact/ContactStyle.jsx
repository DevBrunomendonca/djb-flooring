import styled from 'styled-components'

export const ContainerContact = styled.section`
  display: flex;
  align-items: center;
  gap: 7rem;

  padding: 5rem 0 10rem 0;
  margin: 0 auto 0 0;
  max-width: 1720px;

`

export const ContainerBannerContact = styled.div`
  background-color: var(--secondary-color);
  height: 600px;
  width: 60%;

`


export const ContainerFormContact = styled.form`
  background-color: var(--secondary-color);
  width: 40%;
  
  padding: 5rem 2rem;

  position: relative;
  top: 3rem;

  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 2rem;

  div{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  label{
    font-size: 2rem;
  font-weight: 400;
  color: var(--third-color);
  padding-bottom: .5rem;
  }
  input, textarea {
    padding: 1rem;
    border: 2px solid var(--primary-color);
    resize: none;
  }
  input::placeholder , textarea::placeholder {

  }

  button {
    padding: 1rem 6rem;
  }
`

export const ContentBannerContact = styled.div`
  background: url('/banner-contact.png') center;
  background-size: cover;
  height: 100%;
  position: relative;
  left: 5rem;
  margin: 5rem 0;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h2, p {
    color: var(--secondary-color);
    text-align: center;

  }
`