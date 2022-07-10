import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import CreateCustomer from "./components/CreateCustomer";
import EditCustomer from "./components/EditCustomer";
import Navbar from "./components/Navbar";
import CustomersList from "./components/CustomersList";

function App() {
  
  return (
    
    <Router>
    <div className="container">
    <Navbar />
    <br/>
    <Route path="/" exact component={CustomersList} />
    <Route path="/update/:id" component={EditCustomer} />
    <Route path="/add" component={CreateCustomer} />
    </div>
  </Router>
  );
}

export default App;
