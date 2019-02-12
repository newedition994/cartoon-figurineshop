import React from 'react';
import './Figurines.css';
import FigurineDisplay from '../components/FigurinesDisplay';
import FigurineForm from './FigurineForm';

const Figurines = (props) => (
    <div className="FigurineContainer">
        <h1>Figurines Component</h1>
        {props.figurines.map(figurine => <FigurineDisplay key={figurine.id} figurine={figurine} />)}
        <FigurineForm />
    </div>
);

export default Figurines;