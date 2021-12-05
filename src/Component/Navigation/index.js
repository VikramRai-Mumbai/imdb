import { Link } from "react-router-dom";
import "./styles.css";

export default function Navigation(){
    return (
        <div className="nav-container">
           <ul className="nav-list">
              <Link to="/home"> <li>Home</li></Link>
              <Link to="/movies"> <li>Movies</li></Link>
              <Link to="/watchlist"> <li>Watchlist</li></Link>
              <Link to="/signin"> <li>Signin</li></Link>
           </ul>
        </div>
    );
}