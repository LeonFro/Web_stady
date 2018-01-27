import React from 'react';
import { NavLink } from 'react-router-dom';

function Toolbar() {
    return (
        <header>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">Web stady</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li> <NavLink exact to="/" activeStyle={{color:"green"}}>Home</NavLink></li>
                            <li><NavLink to="/Types" activeStyle={{color:"red"}}>Types</NavLink></li>
                            <li><NavLink to="/Items" activeStyle={{color:"orange"}}>Items</NavLink></li>
                            {/* { user ? <li><a to="">Enter</a></li> 
       :
        <li><a to="">Exit</a></li>} */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Toolbar;
