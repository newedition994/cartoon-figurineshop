import React from 'react';

const FigurineDisplay = ({ figurine }) => (
    <div key={figurine.id} className="FigurineCard">
        <h3>{figurine.name}</h3>
        <p>Price: ${figurine.price}</p>
        <img className="FigurineImg" src={figurine.img_url} alt={figurine.name} />
        <p>Size: {figurine.size}</p>
    </div>
)

export default FigurineDisplay;