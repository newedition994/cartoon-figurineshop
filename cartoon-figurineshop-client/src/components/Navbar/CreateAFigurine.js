import React, { Component } from 'react'
import FigurineForm from '../../containers/FigurineForm';


// see the firgurineForm on another page and route

class MakeAFigurine extends Component {

    render() {
        return (
            <div className="form-display">
                <FigurineForm />
            </div>
        )
    }
}


// display the new figurine

// import the form into the page and then export it

export default MakeAFigurine