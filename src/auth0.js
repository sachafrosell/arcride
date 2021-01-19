import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0 = () => {

const { isAuthenticated, user, isLoading } = useAuth0();
if (isAuthenticated) {
  return true
}

};

export default Auth0;
