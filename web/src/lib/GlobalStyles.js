import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: ${(props) => props.theme.background};
  }
  * {
    box-sizing: border-box;
    outline-color: ${(props) => props.theme.primary};
    font-family: "Montserrat";
  }

  html{
    font-size: 62.5%;
    width: 100%;
    min-height: 100vh;
  }
  #root{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  div{
    /* padding: 2rem; */
    &#root{
      padding: 0;
    }
  }

  @media (max-width: 1080) {
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 600px) {
    html{
      font-size: 50%;
    }
  }

  p {
    font-size: 1.4rem;
  }

  span {
    font-size: 2rem;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 32px;
    width: 32px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: white;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 2.5em;
    margin-bottom: 20px;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }


  .mailchip {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    .msg-alert{
      position: absolute;
      bottom: 0%;
      transform: translateY(100%);
    }
    input {
      border-radius: 5px;
      border: none;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      padding: 0.5rem;
      font-size: 2rem;
      background-color: white;
    }
    button {
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      background-color: ${(props) => props.theme.secondary};
      color: white;
      border: none;
      height: 100%;
    }
  }
`;
