import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Figurines.css';
import FigurineDisplay from '../components/FigurinesDisplay';
import { getFigurines } from '../actions/figurines';



class Figurines extends Component {

    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this);
        this.state = {
            sortByName: true
        };
        this.sortByName = this.sortByName.bind(this);
    }

    componentDidMount() {
        this.props.getFigurines()
    }

    sortByName = () => {
        function compare(a, b) {
            if (a.name > b.name) return 1

            if (a.name < b.name) return -1

            return 0
        }

        let { figurines } = this.props

        return figurines.sort(compare)
    }

    handleClick = () => {

        // we implement the change in state 

        console.log('Clicked happened');

        // display the return of figurines.sort(compare)

    }

    render() {
        return (
            <div className="FigurineContainer">
                <h1 className="NamePlate">Figurines Web App</h1>
                <button className="nameFilter" onClick={this.handleClick}>Sort Figurines by Name</button>
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