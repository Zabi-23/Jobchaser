
import React from "react";

function Header(){

    return(
        
        <div className="top-bar">

        <h1> JOB-CAHSER</h1>
        <div className="search-box">
        <input type="text" placeholder="Sök..." />
        <button type="submit">Sök</button>
        </div>
        </div>
       
    );
}

export default Header;