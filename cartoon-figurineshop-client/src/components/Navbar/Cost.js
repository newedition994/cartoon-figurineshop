import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getFigurines } from '../../actions/figurines';
import '../../containers/Figurines.css'
import FigurineDisplay from '../FigurinesDisplay';

class Cost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            figurine: [],
            costsMore: true,
            maxPrice: ''
        }

        this.getSortedFigurines = this.getSortedFigurines.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }



    componentDidMount() {
        this.props.getFigurines()
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

        this.setState({ [name]: value }, () => {
            console.log("this new maxPrice", this.state)
        })
    }

    handleFilter(filterInput) {
        this.setState(filterInput)
    }

    render() {
        const sortedFigurines = this.getSortedFigurines()

        return (
            <div className="FigurineContainer">
                {/* need assistance with writing the sort function that will work in this rendering */}
                <form>Max Price:
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.maxPrice}
                        name="maxPrice"
                    >
                    </input>
                </form>

                {sortedFigurines.map(figurine => <FigurineDisplay key={figurine.id} figurine={figurine} onFilter={this.handleFilter} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        figurines: state.figurines
    })
}

export default connect(mapStateToProps, { getFigurines })(Cost);
