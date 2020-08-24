import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import App from "../App";

const SquadBuilder = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
          <App 
              user={user.email}
          />
      </div>
    ) ||
    !isAuthenticated && (
      <p>You must be logged in to use the application.</p>
    )
  );
};

export default SquadBuilder;