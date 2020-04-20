import styled from "styled-components";

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const StyledMenu = styled(Menu)`
  &&& {
    background-color: #010e33;
    margin: -2px 0;
    height: 70px;
  }
`;

export const StyledMenuItem = styled(Menu.Item)`
  font-size: 1.7rem;
  font-weight: bolder;
`;

export const Container = styled.nav`
  background-color: ${(props) => props.theme.secondary};
  width: 100%;
  height: 100px;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 65px;
  left: 0%;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 90;
  background-color: #010e33;
`;

export const Anchor = styled(Link)`
  width: 100%;
  font-size: 3rem;
  text-align: center;
  padding: 2rem 0;
  color: ${(props) => props.theme.secondary};
  cursor: pointer;
`;

export const HButton = styled.img.attrs({
  src: "/assets/icons/menu.svg",
})``;
