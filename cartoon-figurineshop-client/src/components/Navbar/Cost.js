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
    }

    sortByPrice() {
        const { figurine } = this.state
        let newPriceList = figurine
        if (this.state.costsMore) {
            newPriceList = figurine.sort((a, b) => a.price > b.price)
        } else {
            newPriceList = figurine.sort((a, b) => a.price < b.price)
        }
        this.setState({
            costsMore: !this.state.costsMore,
            figurine: newPriceList
        })
    }

    componentDidMount() {
        // debugger
        const figurine = getFigurines
        this.setState({
            costsMore: true,
            figurine: figurine
        })
    }



    render() {
        debugger
        const { figurine } = this.state
        return (
            <div className="FigurineContainer">
                {/* need assistance with writing the sort function that will work in this rendering */}
                {figurine.map(figurine => <FigurineDisplay key={figurine.id} figurine={figurine.price} />)}

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
