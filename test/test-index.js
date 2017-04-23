import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';
import Card from '../js/components/card';
import ListContainer from '../js/components/list-container';
import {List, Input} from '../js/components/list';


describe('Board component', function() {
	it('Renders the list titles', function() {
		const listTitles = ['List Title', 'List Title 2'];

    const renderer = TestUtils.createRenderer();
    renderer.render(<Board title='Board Title' lists={listTitles} />);
    const result = renderer.getRenderOutput();
    console.log(result);

    const firstChild = result.props.children[0];
    const secondChild = result.props.children[1];    
 
    result.props.className.should.equal('board');
    firstChild.type.should.equal('h1');
    firstChild.props.children.should.equal('Board Title');
    secondChild.type.should.equal('div');
    secondChild.props.children.should.have.length.of(2);
  })
})

describe('ListContainer component', function() {
  it('Renders the Lists', function() {
    const listTitle = 'List Title';
    const index = 0;

    const renderer = TestUtils.createRenderer();
    renderer.render(<ListContainer key={index} title={listTitle} />);
    const result = renderer.getRenderOutput();

    result.props.title.should.equal(listTitle);
    result.props.cards.should.be.array;
    result.props.should.contain.keys('onInputChange', 'onFormSubmit');
  })
})

describe('List component', function() {
  it('Renders the cards', function() {
    const title = 'List Title';
    const cards = [];

    const renderer = TestUtils.createRenderer();
    renderer.render(<List title={title} cards={cards} />);
    const result = renderer.getRenderOutput();

    const firstChild = result.props.children[0];
    const secondChild = result.props.children[1];
    const thirdChild = result.props.children[2];

    result.props.className.should.equal('list');
    result.props.children.should.have.length.of(3);
    result.props.children.forEach(child => {
      child.type.should.equal('div');
    })
    firstChild.props.className.should.equal('list-title');
    firstChild.props.children.should.equal(title);
    secondChild.props.className.should.equal('cards');
    secondChild.props.children.should.be.array;
    thirdChild.props.className.should.equal('form-div');
  })
})

describe('Input component', function() {
  it('Renders the input form', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Input />);
    const result = renderer.getRenderOutput();

    result.props.children.should.have.length.of(2);
  })
})

describe('Card component', function() {
  it('Renders the card contents', function() {
    const card = 'some text';
    const index = 0;

    const renderer = TestUtils.createRenderer();
    renderer.render(<Card key={index} text={card} />)
    const result = renderer.getRenderOutput();

    console.log(result.props);
    result.props.className.should.equal('card');
    result.props.children.should.equal('some text');   
  })
})