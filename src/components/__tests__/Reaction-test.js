import React from 'react';
import Reaction from '../Reaction';
import { shallow } from 'enzyme';

const aReactionComponent = shallow(<Reaction question="Meaning of life?" 
  answer1="13" answer2="42" imageUrl="/assets/cheetah.png" />);
const aReactionObject = aReactionComponent.instance();

it('creates a Reaction without crashing', () => {
  expect(aReactionComponent).toBeTruthy();
});

it('has a question of "Meaning of life?"', () => {
  expect(aReactionComponent.find('h3').text()).toBe("Meaning of life?");
});

it('has an answer1 of 13', () => {
  expect(aReactionComponent.find('button').at(0).text()).toBe("13 (0%)");
});

it('has an answer2 of 42', () => {
  expect(aReactionObject.props.answer2).toBe('42');
});

it('should increment the answerCount1 when the first button is pressed', ()=>{
  let w2 = shallow(<Reaction />);
  let i2 = w2.instance();
  w2.find('button').at(0).simulate('click');
  expect(i2.state.answer1Count).toBe(1);
});

it('should increment the answerCount2 when the first button is pressed', ()=>{
  let w2 = shallow(<Reaction />);
  let i2 = w2.instance();
  i2.incrementAnswer2();
  expect(i2.state.answer2Count).toBe(1);
});
