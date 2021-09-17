import { useContext } from "react";
import { Authentication } from "../context/Authentication";

const useAuthentication = (setterOnly) => {
  const {token,setToken} = useContext(Authentication);
  return setterOnly ? [setToken] : [token, setToken];
}


export default useAuthentication;
