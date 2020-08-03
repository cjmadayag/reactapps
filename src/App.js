import React from "react";
import Flames from "./views/Flames";
import BillDivider from "./views/BillDivider";
import Calculator from "./views/Calculator"
import {BrowserRouter,Switch,Route} from "react-router-dom";

const App = ()=>{
  return(
    
    <BrowserRouter>
      <Switch>
        <Route path="/flames" component={Flames} strict />
        <Route path="/billdivider" component={BillDivider}/>
        <Route path="/calculator" component={Calculator}/>
      </Switch>
    </BrowserRouter>

  )
}

export default App;