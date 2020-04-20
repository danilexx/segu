import React from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const usePrivate = () => {
  const [cookies, setCookie] = useCookies(["token"]);

  const history = useHistory();
  React.useEffect(() => {
    if (cookies.token) {
      history.push("/");
    }
  }, []);
};

export default usePrivate;
