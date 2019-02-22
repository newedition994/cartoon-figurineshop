import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = ({ changePage }) =>
    <div>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/cost" >Cost</Link></button>
        <button><Link to="/createafigurine">Create Figurine</Link></button>
    </div>



export default Navbar