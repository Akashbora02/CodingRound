
// import React from "react";
// export default class App extends React.Component 
// { state = { 
//   search: '' 
//   }
// handleChange = event => {
//     clearTimeout(this.timeout);
//     this.timeout = setTimeout(() => {
//       this.setState({
//         search: event.target.value
//       })
//     }, 250);
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.handleChange} />
//         {this.state.search ? <p>Search for: {this.state.search}</p> : null}
//       </div>
//     )
//   }
// }


// export default class App extends React.Component {

//   constructor() {
//     super();
//     this.name = 'MyComponent';

//     this.handleClick2 = this.handleClick1.bind(this);
//   }

//   handleClick1() {
//     alert(this.name);
//   }

//   handleClick3 = () => alert(this.name); render() {
//     return (
//       <div>
//         <button onClick={this.handleClick1()}>click 1</button>
//         <button onClick={this.handleClick1}>click 2</button>
//         <button onClick={this.handleClick2}>click 3</button>
//         <button onClick={this.handleClick3}>click 4</button>
//       </div>
//     );
//   }
// }


// import React, { Component } from 'react';

// class App extends React.Component {
//   constructor(props)
//   {
//     super(props);
//     this.state={
//       name:this.props.name || 'Anonymous'
//     }
//   }
//   render() {
//     return (
//         <p>Hello {this.state.name}</p>
//     );
//   }
// }

// export default App;
