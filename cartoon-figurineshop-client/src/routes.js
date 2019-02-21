import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import About from './components/Navbar/About'
import Cost from './components/Navbar/Cost'
import CreateAFigurine from './components/Navbar/CreateAFigurine'

export default (
    <BrowserRouter>
        <Switch id='routes'>

            <Route exact path='/about' component={() => <About />} />
            <Route exact path='/cost' component={() => <Cost />} />
            <Route exact path='/createafigurine' component={() => <CreateAFigurine />} />
        </Switch>
    </BrowserRouter>
)