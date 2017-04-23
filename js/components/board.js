import React from 'react';
import ListContainer from './list-container';

export default function Board(props) {
  let listTitles = []
  props.lists.forEach(function(listTitle, index) {
    listTitles.push(<ListContainer key={index} title={listTitle} />);
  });
  
	return (
    <div className='board'>
      <h1>{props.title}</h1>
  		<div>
        {listTitles}
      </div>
    </div>
	)
}
