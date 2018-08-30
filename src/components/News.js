import React, { Component } from 'react';




class News extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="news">
                <h3>News</h3>
                <hr />
                {this.props.newsCards}
            </div>
        );
    }
}

export default News;