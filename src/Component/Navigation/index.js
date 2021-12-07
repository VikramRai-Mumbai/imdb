import { Link } from "react-router-dom";
import "./styles.css";

export default function Navigation(props){
    return (
        <div className="nav-container">
           <ul className="nav-list">
              <Link to="/"> <li>Home</li></Link>
              <Link to="/movies"> <li>Movies</li></Link>
              <Link to="/watchlist"> <li>Watchlist</li></Link>
              {!props.user ? 
              <Link to="/signin"> <li>Signin</li></Link> : <button>signout</button>}
           </ul>
        </div>
    );
}