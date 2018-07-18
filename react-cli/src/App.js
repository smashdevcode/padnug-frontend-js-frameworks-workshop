import React, { Component } from 'react';

// function Heading(props) {
//   return (
//     <h1>{props.title}</h1>
//   );
// }

// export default function App() {
//   return (
//     <Heading className="main-heading" title="Hello from component!" />
//   );
// }

class App extends Component {
  constructor() {
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    alert('The button was clicked!');
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;
