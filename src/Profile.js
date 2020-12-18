import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>

        <p>Name: {user.given_name + " " + user.family_name}</p>
        <p>Email: {user.email}</p>
        <p>ID: {user.sub.split('auth0|')}</p>
      </div>
    )
  );
};

export default Profile;
