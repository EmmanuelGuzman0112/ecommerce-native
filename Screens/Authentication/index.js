import React, { useState } from "react";
import Ingresar from "./Components/Ingresar";
import Registrarse from "./Components/Registrarse";

const Authentication = () => {
  const [loginView, setLoginView] = useState(false);

  const changeLoginView = () => {
    setLoginView(!loginView);
  };

  return (
    <>
      {loginView ? (
        <Registrarse changeLoginView={changeLoginView} />
      ) : (
        <Ingresar changeLoginView={changeLoginView} />
      )}
    </>
  );
};

export default Authentication;
