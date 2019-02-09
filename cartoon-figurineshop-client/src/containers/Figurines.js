import React from 'react';
import './Figurines.css';

const Figurines = (props) => (
    <div className="FigurineContainer">
        <h1>Figurines Component</h1>
        {/* Map error for some reason returns null */}
        {props.figurines.map(figurine =>
            <div key={figurine.id} className="FigurineCard">
                <h3>{figurine.name}</h3>
                <p>Price: ${figurine.price}</p>
                <img className="FigurineImg" src={figurine.img_url} alt={figurine.name} />
                <p>Size: {figurine.size}</p>
            </div>
        )}
    </div>
);

export default Figurines;