import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Figurines.css';
import FigurineDisplay from '../components/FigurinesDisplay';



class Figurines extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sortOrder: "none",
            searchName: ""
        };
    }

    handleClick = () => {
        // we implement the change in state 

        const newOrder = this.state.sortOrder !== "size" ? "size" : "alpha"
        // this.setState({ [name]: value })
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

    sortBySize = () => this.props.figurines.slice().sort((a, b) => b.size - a.size)

    handleChange = (e) => {

        const { value } = e.target;

        this.setState({ searchName: value })
    }

    filterNames = (figurines) => {
        return figurines.filter(figurine => figurine.name.toUpperCase().includes(this.state.searchName.toUpperCase()))
    }

    render() {

        const sortedFigurines = this.state.sortOrder === "size" ? this.sortByName() : this.sortBySize()

        const filteredsortedFigurines = this.filterNames(sortedFigurines)

        return (
            <div className="FigurineContainer">
                <h1 className="NamePlate">Figurines Web App</h1>
                <form>
                    Search By Name: <input onChange={this.handleChange} type="text" value={this.state.searchName} />
                </form>
                <button className="nameFilter" onClick={this.handleClick}>{this.state.sortOrder === "size" ? "Sort by Size" : "Sort by Name"}</button>
                {filteredsortedFigurines.map(figurine => <FigurineDisplay key={figurine.id} figurine={figurine} />)}

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