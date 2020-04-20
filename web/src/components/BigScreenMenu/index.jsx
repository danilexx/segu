import React, { Fragment } from "react";
import { useMedia, useToggle } from "react-use";

import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import {
  StyledMenu,
  StyledMenuItem,
  MenuContainer,
  Anchor,
  HButton,
} from "./styles";

const HBMenu = ({ isActive }) => {
  if (isActive) {
    return null;
  }
  return (
    <MenuContainer>
      <Anchor href="/">Home</Anchor>
      <Anchor href="/test">Teste de Perfil</Anchor>
      <Anchor href="/corretor/signin">Corretor Login</Anchor>
      <Anchor href="/corretor/signup">Corretor Registro</Anchor>
    </MenuContainer>
  );
};
const BigScreenMenu = () => {
  const isSmall = useMedia("(max-width: 700px)");
  const [isOpened, toggle] = useToggle(false);
  React.useEffect(() => {
    if (isSmall && isOpened) {
      toggle(false);
    }
  }, [isSmall, isOpened]);
  return (
    <Fragment>
      <StyledMenu inverted>
        {isSmall ? (
          <>
            <StyledMenuItem>
              <Image
                src={require("../../icons/Home/Logov1.png")}
                alt="Logo"
                size="small"
              />
            </StyledMenuItem>
            <StyledMenuItem style={{ marginLeft: "auto" }}>
              <HButton onClick={toggle} />
            </StyledMenuItem>

            <HBMenu isActive={isOpened} />
          </>
        ) : (
          <>
            <StyledMenuItem>
              <Image
                src={require("../../icons/Home/Logov1.png")}
                alt="Logo"
                size="small"
              />
            </StyledMenuItem>
            <StyledMenu.Menu position="right">
              <StyledMenuItem name="home">
                <Link to="/">Home</Link>
              </StyledMenuItem>
              <StyledMenuItem name="quiz">
                <Link to="/test">Teste de perfil</Link>
              </StyledMenuItem>
              {/* <StyledMenuItem name="blog">Blog de seguros</StyledMenuItem> */}
              <StyledMenuItem name="corretor">
                <Link to="/corretor/signin">Área do corretor</Link>
              </StyledMenuItem>
            </StyledMenu.Menu>
          </>
        )}
      </StyledMenu>
    </Fragment>
  );
};

export default BigScreenMenu;
