import React from 'react';

const Figurines = (props) => (
    <div>
        <h1>Figurines Component</h1>
        {props.figurines.map(figurine =>
            <div>
                <h3>{figurine.name}</h3>
                <p>Price: ${figurine.price}</p>
                <img src={figurine.img_url} alt={figurine.name} />
                <p>Size: {figurine.size}</p>
            </div>

        )}
    </div>
);

export default Figurines;