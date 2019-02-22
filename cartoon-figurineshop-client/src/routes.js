import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import About from './components/Navbar/About'
import Cost from './components/Navbar/Cost'
import Figurines from './containers/Figurines.js';
import Navbar from './components/Navbar/Navbar.js';
import CreateAFigurine from './components/Navbar/CreateAFigurine'

export default (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch id='routes'>
                <Route exact path='/' component={() => <Figurines />} />
                <Route path='/about' component={() => <About />} />
                <Route path='/cost' component={() => <Cost />} />
                <Route path='/createafigurine' component={() => <CreateAFigurine />} />
            </Switch>
        </div>
    </BrowserRouter>
)