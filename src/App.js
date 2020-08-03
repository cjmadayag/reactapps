import React from "react";
import Flames from "./views/Flames";
import BillDivider from "./views/BillDivider";
import Calculator from "./views/Calculator"
import Home from "./views/Home";
import {BrowserRouter,Switch,Route} from "react-router-dom";

const App = ()=>{
  return(
    
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/flames" component={Flames} strict />
        <Route path="/billdivider" component={BillDivider} strict/>
        <Route path="/calculator" component={Calculator} strict/>
      </Switch>
    </BrowserRouter>

  )
}

export default App;