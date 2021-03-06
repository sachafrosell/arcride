import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "reactstrap";


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      style={{
        background: "none",
        color: "black",
        position: "relative",
        float: "right",
        fontSize: "15px",
        borderRadius: "0px",
        padding: "15px",
        marginTop: "20px"
      }}
      onClick={() => logout({ returnTo: "https://arcrideglobal.com/#/login" })}>
      LOGOUT
    </Button>
  );
};

export default LogoutButton;
