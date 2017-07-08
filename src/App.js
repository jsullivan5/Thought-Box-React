import React, { Component } from 'react';
import './App.css';
import CreateThought from './createThought/createThought';
import { ThoughtList } from './thoughtList/thoughtList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: []
    };
  }
  async componentDidMount() {
    const reader = await fetch(
      `https://code.jquery.com/jquery-3.2.1.slim.min.js`
    ).then(r => r.body.getReader());
    let stuff = await reader.read();
    const chunks = [];
    while (!stuff.done) {
      chunks.push(stuff.value);
      stuff = await reader.read();
    }
    const code = chunks
      .join()
      .split(",")
      .map(char => String.fromCharCode(char))
      .join("");
    await loadStuff(btoa(code));
    /*global $*/
    try {
      $("body").css("background", "mistyrose");
    } catch (e) {
      document.body.style.background = "springgreen";
    }
  }

  createThought(thought) {
    Object.assign(thought, { id: this.state.thoughts.length });
    this.state.thoughts.push(thought);
    this.setState({ thoughts: this.state.thoughts });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>ThoughtBox</h2>
        </div>
        <CreateThought createThought={this.createThought.bind(this)} />
        <div>
          <ThoughtList thoughtList={this.state.thoughts} />
        </div>
      </div>
    );
  }
}
function loadStuff(code) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `data:text/javascript;base64,${code}`;
    document.body.appendChild(script);
    script.onload = resolve;
  });
}
export default App;
