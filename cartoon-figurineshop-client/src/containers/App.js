import React, { Component } from 'react';
import Figurines from './Figurines.js'
import './App.css'


const figurines = [
    {
        name: "Okoye",
        price: 12,
        img_url: "https://www.amazon.com/Funko-Marvel-Panther-Limited-Bobblehead/dp/B07B4NF97M/ref=sr_1_21?s=toys-and-games&ie=UTF8&qid=1549726868&sr=1-21&keywords=black+panther+funko+pop",
        size: 3
    },
    {
        name: "MBaku",
        price: 12,
        img_url: "https://www.amazon.com/Funko-Pop-Marvel-Panther-MBaku-Collectible/dp/B07C7KNVB9/ref=sr_1_13?s=toys-and-games&ie=UTF8&qid=1549726868&sr=1-13&keywords=black+panther+funko+pop",
        size: 3
    },
    {
        name: "Shuri",
        price: 12,
        img_url: "https://www.amazon.com/Funko-Pop-Marvel-Panther-Collectible/dp/B07799VYN8/ref=sr_1_7?s=toys-and-games&ie=UTF8&qid=1549726868&sr=1-7&keywords=black+panther+funko+pop",
        size: 3
    }
]

class App extends Component {
    render() {
        return (
            <div className="App">
                <Figurines figurines={figurines} />
            </div>
        )
    }
}

export default App;