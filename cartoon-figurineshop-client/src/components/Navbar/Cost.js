import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../../containers/Figurines.css'
import FigurineDisplay from '../FigurinesDisplay';

class Cost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            maxPrice: ''
        }

        this.getSortedFigurines = this.getSortedFigurines.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getSortedFigurines() {
        // sort the figurines based on lowest to highest price
        function compare(a, b) {
            if (a.price < b.price) return -1

            if (a.price > b.price) return 1

            return 0
        }

        let { figurines } = this.props

        return figurines.sort(compare)
    }

    handleChange = event => {

        const { name, value } = event.target;

        // trying to achieve a sort but not successful

        this.setState({ [name]: value }, () => {
            console.log("this new maxPrice", this.state)
        })
    }

    // state changes but the prices do not filter through as described
    filterByMaxPrice = () => {
        return this.props.figurines.filter(figurine => figurine.price <= parseInt(this.state.maxPrice));
    }

    render() {
        //should a filter be added to this variable


        const filteredFigurines = isNaN(parseInt(this.state.maxPrice)) ? this.props.figurines : this.filterByMaxPrice()

        return (
            <div className="FigurineContainer">

                <form>Max Price:
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.maxPrice}
                        name="maxPrice"
                    >
                    </input>
                </form>

                {filteredFigurines.map(figurine => <FigurineDisplay key={figurine.id} figurine={figurine} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        figurines: state.figurines
    })
}

export default connect(mapStateToProps)(Cost);
