import React, { Component } from 'react';
import Figurines from './containers/Figurines.js';
import Navbar from './components/Navbar/Navbar.js';
import './App.css'


class App extends Component {


    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <Figurines />
            </div>
        )
    }
}

export default App;