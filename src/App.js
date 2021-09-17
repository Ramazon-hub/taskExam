import "./App.scss";
import { Switch } from 'react-router-dom'
//components
//pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Private from './routing/Private'
import Public from "./routing/Public";
function App() {
  return (
   <div className="app-wrapper">
      <Switch>
          <Public path="/login" component={Login} />
          <Private path="/" component={Home} />
      </Switch>
   </div>
     
  );
}

export default App;
