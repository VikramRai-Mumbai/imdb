import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Component/Home";
import Movies from "./Component/Movies";
import Signin from "./Component/Signin";
import Watchlist from "./Component/Watchlist"
import Navigation from "./Component/Navigation"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <Router>
    <Navigation />
    <Route path="/home" component={Home} />
    <Route path="/movies" component={Movies} />
    <Route path="/watchlist" component={Watchlist} />
    <Route path="/signin" component={Signin} />
  </Router>
     

    </div>
  );
}

export default App;
