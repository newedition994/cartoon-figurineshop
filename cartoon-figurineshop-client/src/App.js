import React, { Component } from 'react';
import routes from './routes'
import './App.css'
import { connect } from 'react-redux'
import { getFigurines } from './actions/figurines';



class App extends Component {


    componentDidMount() {
        this.props.getFigurines()
    }

    render() {
        return (
            <div className="App">
                {routes}
            </div>
        )
    }
}




export default connect(null, { getFigurines })(App);