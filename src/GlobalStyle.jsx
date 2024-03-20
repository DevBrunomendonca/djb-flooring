import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Lato", sans-serif;
}

:root {
  --primary-color: #DDBE99;
  --secondary-color: #FEFEFE;
  --third-color: #3D3D3D;
}

html {
  font-size: 62.5%;
}
body {
  background-color: var(--primary-color);
}


`