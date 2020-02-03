import React, { Component } from 'react';
import './App.css';

  class myApp extends Component {

    state = {
      number: 0,
      likes: 'likes'
    }
    
    addLikes = () => {
      console.log(this.state.number)
      // this is the part of your code that is wrong
      this.setState ({
        number: this.state.number + 1,
      })
    }

    render() {
      
      if (this.state.number === 1) {
        this.state.likes = 'like';
      } else {
        this.state.likes = 'likes';
      }
     
    return (
      <div className="App">
        <button className="button" onClick={this.addLikes}>{this.state.number} {this.state.likes}</button>
      </div>
    )
  }
}

export default myApp;
  

