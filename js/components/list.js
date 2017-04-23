import React from 'react';
import Card from './card';

export class List extends React.Component {
  getCards() {
    let cardContents = [];
      this.props.cards.forEach(function(card, index) {
      cardContents.push(<Card key={index} text={card} />);
    });
    return cardContents;
  }  

  render() {
  	return (
      <div className='list'>
        <div className='list-title'>
          {this.props.title}
        </div>
        <div className='cards'>
          {this.getCards()}
        </div>
        <div className='form-div'>
          <Input onChange={this.props.onInputChange} onSubmit={this.props.onFormSubmit}/>
        </div>
      </div>
    );
  }
}

export function Input(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type='text' onChange={props.onChange}/>
      <input type='submit' value='submit'/>
    </form>
  );
}
