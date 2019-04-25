import React from 'react';
import LikeButton from '../components/LikeButton';

const FigurineDisplay = ({ figurine }) =>
    <div className="FigurineCard">
        <h3>{figurine.name}</h3>
        <p>Price: ${figurine.price}</p>
        <img className="FigurineImg" src={figurine.img_url} alt={figurine.name} />
        <p>Size: {figurine.size}</p>
        <LikeButton />

    </div>


export default FigurineDisplay;