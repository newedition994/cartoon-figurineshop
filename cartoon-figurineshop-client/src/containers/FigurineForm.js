import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFirgurineFormData } from '../actions/figurineForm';
import { addFirgurine } from '../actions/figurines';


class FigurineForm extends Component {


    handleOnChange = event => {
        const { name, value } = event.target;
        const currentFigurineFormData = Object.assign({}, this.props.figurineFormData, {
            [name]: value
        })
        this.props.updateFirgurineFormData(currentFigurineFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addFirgurine(this.props.figurineFormData)
    }

    render() {
        const { name, price, img_url, size } = this.props.figurineFormData;

        return (
            <div>
                Create a Figurine
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" onChange={this.handleOnChange} name="name" value={name} />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input type="text" onChange={this.handleOnChange} name="price" value={price} />
                    </div>
                    <div>
                        <label htmlFor="img_url">Img_url:</label>
                        <input type="text" onChange={this.handleOnChange} name="img_url" value={img_url} />
                    </div>
                    <div>
                        <label htmlFor="size">Size:</label>
                        <input type="text" onChange={this.handleOnChange} name="size" value={size} />
                    </div>
                </form>
                <button type="submit">Add to collection</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        figurineFormData: state.figurineFormData
    }
}

export default connect(mapStateToProps, { updateFirgurineFormData, addFirgurine })(FigurineForm);