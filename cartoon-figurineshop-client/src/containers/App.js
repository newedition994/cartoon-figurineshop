import React, { Component } from 'react';
import Figurines from './Figurines.js';
import { getFigurines } from '../actions/figurines';
import './App.css'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {


    componentDidMount() {
        fetch(`${API_URL}/figurines`)
            .then(response => response.json())
    }

    render() {
        return (
            <div className="App">
                <Figurines />
            </div>
        )
    }
}

export default App;