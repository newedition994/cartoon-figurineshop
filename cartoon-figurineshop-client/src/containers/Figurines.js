import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Figurines.css';
import FigurineDisplay from '../components/FigurinesDisplay';
import FigurineForm from './FigurineForm';

class Figurines extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_FIGURINES_SUCCESS',
            figurines: [{ name: "Okoye", price: 12, img_url: "", size: 3 }]
        })
    }

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

const mapStateToProps = (state) => {
    return ({
        figurines: state.figurines
    })
}

export default connect(mapStateToProps)(Figurines);