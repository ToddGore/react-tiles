import React, { Component } from 'react';





class Inspirational extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="inspirational">
                <h3>Inspirational</h3>
                <hr />
                {this.props.inspCards}
            </div>
        );
    }
}

export default Inspirational;