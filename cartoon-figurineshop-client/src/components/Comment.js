import React, { Component } from 'react';


class Comment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            comment: ""
        }
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ comment: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ comments: [...this.state.comments, this.state.comment] })
    }

    render() {
        return (
            <div>
                <p>Comments: {this.state.comments} </p>
                <form onSubmit={this.handleSubmit}>
                    Comments on the Figurine: <input type="text" value={this.state.comment} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Comment;