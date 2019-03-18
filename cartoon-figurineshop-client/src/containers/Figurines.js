import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Figurines.css';
import FigurineDisplay from '../components/FigurinesDisplay';
import { getFigurines } from '../actions/figurines';



class Figurines extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state {
    //         figurine: [],
    //             sortByName: true
    //     }
    // }

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


        // display the return of figurines.sort(compare)

    }

    render() {
        return (
            <div className="FigurineContainer">
                <h1 className="NamePlate">Figurines Web App</h1>
                <button className="nameFiler">Sort Figurines by Name</button>
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