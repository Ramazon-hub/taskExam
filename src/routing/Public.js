import { Route,Redirect } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";
import { useLocation } from "react-router"


function Public(props){
    const [token] = useAuthentication();
    const location = useLocation()
    if(token && location.pathname === '/login'){
        return <Redirect to="/"/>
    }
    return <Route {...props}/>
}
export default Public