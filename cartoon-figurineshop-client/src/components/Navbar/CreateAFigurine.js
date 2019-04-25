import React, { Component } from 'react'
import FigurineForm from '../../containers/FigurineForm';
import FigurinesDisplay from '../../components/FigurinesDisplay';


// see the firgurineForm on another page and route

class MakeAFigurine extends Component {

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="form-display">
                <FigurineForm />
                {/*  display the new figurine */}
                <FigurinesDisplay />
            </div>
        )
    }
}

// import the form into the page and then export it

export default MakeAFigurine