import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Home from "./Component/Home";
import Movies from "./Component/Movies";
import Signin from "./Component/Signin";
import Watchlist from "./Component/Watchlist"
import Navigation from "./Component/Navigation"
import Dashboard from "./Component/Dashboard"
import logo from './logo.svg';
import './App.css';

const PrivateRoute = (props)=>{
  const { Component, user, path, exact} = props;
  return (<Route path={path} exact={exact}
  render={(props)=>{return (user ? <Component {...props} user={user} /> : <Redirect to="/signin" />)
  }}
  />
  );
};

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
  <Router>
    <Navigation user={user} />
    <Route exact path="/" component={Home}  />
    <PrivateRoute  path="/dashboard" Component={Dashboard} user={user} />
    <PrivateRoute path="/movies" Component={Movies} user={user} />
    <PrivateRoute path="/watchlist" Component={Watchlist} user={user} />
    <Route path="/signin" component={Signin} />
  </Router>
     

    </div>
  );
}

export default App;
