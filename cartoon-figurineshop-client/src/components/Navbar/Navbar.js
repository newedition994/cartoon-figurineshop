import React from 'react'
// import routes from './route.js'



const Navbar = ({ changePage }) =>
    <div>
        <button className="nav-btn" onClick={() => changePage('about')}>About</button>
        <button className="nav-btn" onClick={() => changePage('price')}>Cost</button>
        <button className="nav-btn" onClick={() => changePage('createFigurine')}>Create a Figurine</button>
    </div>



export default Navbar