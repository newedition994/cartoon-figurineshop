import React, { Component } from 'react'
import { connect } from 'react-redux';
import FigurineForm from '../../containers/FigurineForm';
import FigurineDisplay from '../../components/FigurinesDisplay';



// see the firgurineForm on another page and route

class MakeAFigurine extends Component {

    handleSubmit = event => {
        event.preventDefault();
    }



    render() {



        // define figurine to get rid of the error or just use some of the information from Figurine Display and not all of it?
        const length = this.props.figurines.length

        return (
            <div className="form-display">
                <FigurineForm />
                {/*  display the new figurine */}
                {length > 0 ? <FigurineDisplay figurine={this.props.figurines[length - 1]} /> : ""}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        figurines: state.figurines
    })
}

// import the form into the page and then export it

export default connect(mapStateToProps)(MakeAFigurine)