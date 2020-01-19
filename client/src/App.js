import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard"
import Landing from "./pages/landing"


function App() {
  return (
    
   
      <Router>
<div>
         <Route exact path="/" component={Landing} />
         <Route exact path="/user/:stuff" component={Dashboard} />
         <Route exact path="/user" component={Dashboard} />


         <Link to="/user"> User</Link>
         </div>

      </Router>


   
  );
}

export default App;
