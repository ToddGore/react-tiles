import React, { Component } from 'react';
import './App.css';
import Inspirational from "../src/components/Inspirational";
import News from "../src/components/News";
import YourArea from "../src/components/YourArea";

import masonry from "../src/components/masonry-data.json";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myJSON: []
    };
  }

  componentDidMount() {
    this.setState({
      myJSON: masonry.tiles
    })
  }

  render() {
    let cards = this.state.myJSON.map((card, i) => {
      return (
        <div className="card" key={i}>
          <img src={require(`${card.image}`)} alt={card.meta} />
          <h3>{card.heading}</h3>
          <p>{card.content}</p>
        </div>
      )
    })

    return (
      <div className="app" >
        <YourArea areaCards={cards.slice(0, 3)} />
        <News newsCards={cards.slice(3, 6)} />
        <Inspirational inspCards={cards.slice(6, 9)} />
      </div>
    );
  }
}

export default App;
