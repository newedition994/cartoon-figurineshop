import React, { Component } from 'react';
import Figurines from './Figurines.js'
import './App.css'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            figurines: []
        }
    }

    componentDidMount() {
        fetch(`${API_URL}/figurines`)
            .then(response => response.json())
            .then(figurines => this.setState({ figurines }))
    }

    render() {
        return (
            <div className="App">
                <Figurines figurines={this.state.figurines} />
            </div>
        )
    }
}

export default App;