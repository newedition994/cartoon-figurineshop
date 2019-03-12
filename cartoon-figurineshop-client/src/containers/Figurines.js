import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Figurines.css';
import FigurineDisplay from '../components/FigurinesDisplay';
import { getFigurines } from '../actions/figurines';



class Figurines extends Component {

    componentDidMount() {
        this.props.getFigurines()
    }

    render() {
        return (
            <div className="FigurineContainer">
                <h1 className="NamePlate">Figurines Web App</h1>
                {this.props.figurines.map(figurine => <FigurineDisplay key={figurine.id} figurine={figurine} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        figurines: state.figurines
    })
}

export default connect(mapStateToProps, { getFigurines })(Figurines);