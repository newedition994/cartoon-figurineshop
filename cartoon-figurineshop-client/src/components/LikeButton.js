import React, { Component } from 'react'


class LikeButton extends Component {

    state = {
        count: 0
    };

    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };

    render() {
        return (
            <button className="likes" onClick={this.handleClick}>{this.state.count}</button>
        )
    }
}
// display a button

// build a counter to count the clicks

// display the number of likes

export default LikeButton;