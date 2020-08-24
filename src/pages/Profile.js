import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import App from '../App';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <p>Hai effettuato l'accesso come:</p>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    ) ||
    !isAuthenticated && (
      <p>You must be logged in to use the application.</p>
    )

  );
};

export default Profile;