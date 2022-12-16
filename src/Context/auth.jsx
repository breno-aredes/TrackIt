import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [image, setImageUser] = useState("");
  const [token, setTokerUser] = useState("");
  const navigate = useNavigate();

  function singIn(imageUser, tokenUser) {
    setImageUser(imageUser);
    setTokerUser(tokenUser);

    navigate("/hoje");
  }

  return (
    <AuthContext.Provider value={{ singIn, image, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
