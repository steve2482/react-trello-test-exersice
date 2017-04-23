import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			inputText: '',
      cards: []
		}
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
	}

  onAddInputChanged(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onAddSubmit();
  }

  onAddSubmit() {
    let array = this.state.cards;
    array.push(this.state.inputText);
    this.setState({
      cards: array
    })
  }

  render() {
    return (<List title={this.props.title}cards={this.state.cards} onInputChange={this.onAddInputChanged} onFormSubmit={this.handleSubmit}/>)
  }
}