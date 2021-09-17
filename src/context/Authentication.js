import { createContext, useEffect, useState } from "react";

const Authentication = createContext(null);

function Provider({ children }) {
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);
  return(
      <>
        <Authentication.Provider value={ { token, setToken } }>
            {children}
        </Authentication.Provider>
     </>
  )
}

export { Authentication, Provider };
