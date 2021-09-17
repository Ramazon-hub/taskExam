import "./Login.scss";

import {  useRef } from "react";
import useAuthentication from "../../hooks/useAuthentication";
const Login = () => {
    const [setToken] = useAuthentication(true)
  const subdomain = useRef();
  const username = useRef();
  const password = useRef();

function submit(e){
    e.preventDefault();
    const myFetch = (url) => {
        const data = `_username=${username.current.value}&_password=${password.current.value}&_subdomain=${subdomain.current.value}`;
        fetch(url,{
            method:"POST",
            body: data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).then(res=>res.json())
        .then(data=>{
            setToken(data.token)
            
        })
        subdomain.current.value = "";
        username.current.value = "";
        password.current.value = "";
    }
    
   
   myFetch(`https://${subdomain.current.value}.ox-sys.com/security/auth_check`)

}

  return (
    <div className="login">
      {/* <Header/> */}

      <form className="form" onSubmit={submit}>
        <input
          ref={subdomain}
          className="form__input"
          type="text"
          placeholder="Your company"
          required
        />

        <input
          ref={username}
          className="form__input"
          type="text"
          placeholder="Username"
          required
        />

        <input
          ref={password}
          className="form__input"
          type="password"
          placeholder="Password"
          required
        />
        <button className="form__btn" type="submit"> Submit </button>
      </form>
    </div>
  );
}


export default Login

