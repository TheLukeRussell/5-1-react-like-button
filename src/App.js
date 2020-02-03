import React, { Component } from 'react';
import './App.css';

  class App extends Component {

    state = {
      number: 0,
      likes: 'Likes'
    }
    
    addLikes = () => {
      this.setState = ({
        number: this.state.number + 1
      })
    }

    render() {
    return(
      <div className="App">
        <button onClick={this.addLikes} className="button">{this.state.number} {this.state.likes}</button>
      </div>
    )
  }
}

export default App;
  

