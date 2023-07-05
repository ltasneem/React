import React from 'react'
import {Link} from "react-router-dom";

export default class Menu extends React.Component{
    render(){

        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                <Link to="/" className="nav-link">Tracker</Link>
                <button className="navbar-toggler" type="button" 
                        data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Reactions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">Add</Link>
                        </li>   
                    </ul>
                </div>  
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" 
                        placeholder="Search" aria-label="Search" />>
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                        type="submit">Search</button>
                </form>
            </nav>
        );
    }
}