import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Css variables */

:root{
  --titles:  'Roboto Mono', monospace;
  --paragraph: Calibre;

  /* theme */
  --secondary-bg: #121111;
  --primary-bg: #000000;
  --secondary: #00FF00;
  --primary-text: #7B7C85;
  --secondary-text: #ffff;
  --mail-btn: #121111;
  --line-space: 1.3;
  --transition: all .3s ease-in-out;
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body{

    font-family: var(--paragraph);
    background-color: var(--secondary-bg);
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    user-select: none;
        
}


/* Scroll bar */

body::-webkit-scrollbar{
    width: 2px;
}

body::-webkit-scrollbar-track{
    background: var(--primary-bg);
}

body::-webkit-scrollbar-thumb {
    background-color:  #00FF00; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
}

/* Select text style */

::selection{
    background-color:  #00FF09 !important;
    color: #ccd6f6;
}


/* Navbar onScroll */

.navbar{
  position: fixed;
  top: 0;
  width: 100% !important;
  height: 14vh;
  z-index: 9;
  background-color: var(--secondary-bg);
  border-bottom: 1px solid rgba(110, 243, 165, 0.1);
  box-shadow: rgba(2, 12, 27, 0.3) 0px 8px 30px -8px;

}

@media (max-width: 768px) {

    .navbar{
      height: 12vh;
    }

  }

  
a{
    text-decoration: none;
    display: inline-block;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--secondary);
    }
}


button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

ul{
    padding: 0;
    margin: 0;
    list-style: none;

    li{
        position: relative;
    }
}


`;

export default GlobalStyle;
