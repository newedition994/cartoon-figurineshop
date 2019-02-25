import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getFigurines } from '../../actions/figurines';
import '../../containers/Figurines.css'
// import FigurineDisplay from '../FigurinesDisplay';


class Cost extends Component {

    componentDidMount() {
        this.props.getFigurines()
    }



    render() {
        return (
            <div className="FigurineContainer">
                {/* need assistance with writing the sort function that will work in this rendering */}
                {/* {this.props.figurines.sort((a, b) => a.figurine.price > b.figurine.price).map(figurine => <FigurineDisplay key={figurine.id} figurine={figurine.price} />)} */}
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
