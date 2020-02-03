import React, { Component } from 'react';
import './App.css';
import {render} from '@testing-library/react';

// class App extends Component {
//   render() {
    // return(
    //   <div className="App">
    //     <h1>Hey what's poppin</h1>
    //   </div>
    // );
    
    // Or

//     return React.createElement('div', {className:'App'}, React.createElement('h1', null, `Hey what's poppin`));

    // return React.createElement('div', {className: 'App'}, React.createElement('button', null, `likes`));

    // export default App;

  class LikeButton extends Component {

    state = {
      number: '0',
      likes: 'Likes'
    }
    
    
    increaseLikes = () => {
      console.log('you clicked button')
      this.setState = ({
        number: this.state.number + 1,
      })
    }


    render() {
      console.log(this.state.number)
    return(
      <div className="Like">
        <button onClick={this.increaseLikes} className="button">{this.state.number} {this.state.likes}</button>

      </div>
    )
  };
}

export default LikeButton;
  

