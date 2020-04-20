import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import useReactFontLoader from "react-font-loader";
import Home from "-/pages/Home";
import ProfileTest from "-/pages/ProfileTest";
import SignUp from "-/pages/Corretor/SignUp";
import SignIn from "-/pages/Corretor/SignIn";
import Client from "-/pages/Client";

const Routes = () => {
  useReactFontLoader({ fonts: [{ name: "Roboto" }, { name: "Montserrat" }] });

  return (
    <Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/corretor/signup" exact component={SignUp} />
      <Route path="/corretor/signin" exact component={SignIn} />
      <Route path="/test" exact component={ProfileTest} />
      <Route path="/client/:id" exact component={Client} />
    </Fragment>
  );
};

export default Routes;
