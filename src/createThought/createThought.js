import React, { Component } from 'react';

export default class CreateThought extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.createThought(this.state)
    this.setState({title: '', body: ''})
  }
  render() {
    return(
      <div>
        <input className="title-input"
               value={this.state.title}
               id='title'
               onChange={(e) => this.setState({title: e.target.value })}/>
        <input className="body-input"
               type="text"
               id='body'
               onChange={(e) => this.setState({body: e.target.value })}
               value={this.state.body}/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }

}
