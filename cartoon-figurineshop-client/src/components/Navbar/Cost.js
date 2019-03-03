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
            costsMore: true
        }

        this.getSortedFigurines = this.getSortedFigurines.bind(this)
    }

    // sortByPrice() {
    //     const { figurine } = this.state
    //  let newPriceList = figurine
    //     if (this.state.costsMore) {
    //         newPriceList = figurine.sort((a, b) => a.price > b.price)
    //     } else {
    //         newPriceList = figurine.sort((a, b) => a.price < b.price)
    //     }
    //     this.setState({
    //         costsMore: !this.state.costsMore,
    //         figurine: newPriceList
    //     })
    // }

    componentDidMount() {
        // const figurine = getFigurines
        // this.setState({
        //     costsMore: true,
        //     figurine: figurine
        // })

        this.props.getFigurines()
    }

    getSortedFigurines() {
        function compare(a, b) {
            if (a.price < b.price) return -1

            if (a.price > b.price) return 1

            return 0
        }

        let { figurines } = this.props

        return figurines.sort(compare)
    }



    render() {
        const sortedFigurines = this.getSortedFigurines()


        return (
            <div className="FigurineContainer">
                {/* need assistance with writing the sort function that will work in this rendering */}
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

export default connect(mapStateToProps, { getFigurines })(Cost);
