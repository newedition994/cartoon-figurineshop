import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Figurines.css';
import FigurineDisplay from '../components/FigurinesDisplay';
import { getFigurines } from '../actions/figurines';



class Figurines extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sortByName: "none"
        };
    }

    componentDidMount() {
        this.props.getFigurines()
    }

    handleClick = () => {
        // we implement the change in state 

        const newOrder = this.state.sortOrder === "size" ? "alpha" : "size"

        this.setState({ sortOrder: newOrder }, () => {
            console.log("new state is ", this.state, "sorted array is", this.sortByName(), "sorted by size", this.sortBySize())
        })
    }

    sortByName = () => {
        return this.props.figurines.slice().sort((a, b) => {
            const nameA = a.name
            const nameB = b.name

            if (nameA < nameB) { return -1 }
            if (nameA > nameB) { return 1 }
            return 0
        })
    }

    sortBySize = () => {
        this.props.figurines.slice().sort((a, b) => b.size - a.size)
    }

    render() {

        const sortedFigurines = this.state.sortOrder === "size" ? this.sortByName() : this.sortBySize()

        return (
            <div className="FigurineContainer">
                <h1 className="NamePlate">Figurines Web App</h1>
                <button className="nameFilter" onClick={this.handleClick}>Toggle Sort Figurines by Name</button>
                {/* Map Error that is unclear */}
                {sortedFigurines.map(figurine => <FigurineDisplay key={figurine.id} figurine={figurine} />)}
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