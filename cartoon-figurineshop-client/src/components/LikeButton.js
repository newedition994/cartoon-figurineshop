import React, { Component } from 'react'


class LikeButton extends Component {

    state = {
        count: 0
    };

    // build a counter to count the clicks
    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };

    render() {
        return (
            // display a button
            <button className="likes" onClick={this.handleClick}>
                {/* display the number of likes */}
                {this.state.count}</button>
        )
    }
}

export default LikeButton;