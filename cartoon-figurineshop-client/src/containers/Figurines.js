import React, { Component } from 'react';
import './Figurines.css';
import FigurineDisplay from '../components/FigurinesDisplay';
import FigurineForm from './FigurineForm';

class Figurines extends Component {
    render() {
        return (
            <div className="FigurineContainer">
                <h1>Figurines Web App</h1>
                {this.props.figurines.map(figurine => <FigurineDisplay key={figurine.id} figurine={figurine} />)}
                <FigurineForm />
            </div>
        )
    }
}

export default Figurines;