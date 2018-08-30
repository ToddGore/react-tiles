import React, { Component } from 'react';


class YourArea extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="your-area">
                <h3>In your area</h3>
                <hr />
                {this.props.areaCards}
            </div>
        );
    }
}

export default YourArea;