import { NavLink } from "react-router-dom";
import React from "react";

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

      const linkStyles = {
        margin: "auto",
        display: "inline-block",
      }
     

return (
    <div>
        <h1 style={linkStyles}>Last Minute Tee Times</h1>
        <button style={linkStyles} variant="outline" onClick={handleLogoutClick}>
        Logout
        </button>
      
       
       
    </div>
)
}
export default NavBar;