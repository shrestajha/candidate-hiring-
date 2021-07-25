import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './navbar';
import Simulation from './simulation';
import AboutUs from './aboutus';
import Reports from './reports';
import SelectTest from "./SelectTest";
import SimulationWelcome from "./SimulationWelcome";
import SimulationInstructions from "./SimulationInstructions";
import TestTaker from "./TestTaker";

function App() {
  return (
    <Router>
      <div className="application">
                <style>{'body { background-color: PapayaWhip; }'}</style>
            
        </div>
    <div className="container-fluid">
    <div className="row">
      <NavBar/>
    </div>
    <br />
    
   </div>
   <Switch>
    <Route path="/simulation">
      <Simulation/>
    </Route>
    <Route path="/reports">
      <Reports />
    </Route>
    <Route path="/aboutus">
      <AboutUs />
    </Route>
    <Route path="/selecttest">
      <SelectTest />
    </Route>
    <Route path="/selectwelcome">
      <SimulationWelcome />
    </Route>
    <Route path="/selectinstructions">
      <SimulationInstructions />
    </Route>
    <Route path="/testtaker">
      <TestTaker />
    </Route>
  </Switch>
   </Router>
  );
}

export default App;

   
 
              
    

    
 
