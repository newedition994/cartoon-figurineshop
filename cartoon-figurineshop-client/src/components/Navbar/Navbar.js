import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = ({ changePage }) =>
    <div>
        <button className="nav-btn"><Link to="/">Home</Link></button>
        <button className="nav-btn"><Link to="/about">About</Link></button>
        <button className="nav-btn"><Link to="/cost" >Cost</Link></button>
        <button className="nav-btn"><Link to="/createafigurine">Create Figurine</Link></button>
    </div>



export default Navbar