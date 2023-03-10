import { NavLink } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

      const linkStyles = {
        display: "inline-block",
        marginLeft: "15rem",
        marginRight: "auto",
        width: "55%",
      }

      
     

return (
    <div >
        <h1 style={linkStyles}>
            <Link to='/' className="sizey">Last Minute Tee Times</Link>
        </h1>
        <span className="navB">
          <button className="navc"> 
            <Link to='/myteetimes' >My Tee-times</Link>
          </button>
          <NavLink to="/">
            <button className="navB" variant="outline"  onClick={handleLogoutClick}>Logout</button>
          </NavLink>
          
        </span>
        
        
    
    </div>
)
}
export default NavBar;