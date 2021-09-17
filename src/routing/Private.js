import useAuthentication from "../hooks/useAuthentication"
import {Route,Redirect} from 'react-router-dom';
function Private(props){
    const [token] = useAuthentication();
    if(token){
        return <Route {...props}/>
    }
    return <Redirect to="/login"/>
}
export default Private
       
    
