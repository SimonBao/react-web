import React from 'react';
import faker from "faker";
import './App.css';
import Comment from './components/Comment';
import ApprovalCards from './components/ApprovalCards';

function App() {
  return (
    <div className="ui container comments">
      <div>
        <Comment randomName={faker.name.findName()} randomImage={faker.image.avatar()} comment={faker.lorem.sentence()}/>
        <Comment randomName={faker.name.findName()} randomImage={faker.image.avatar()} comment={faker.lorem.sentence()}/>
        <Comment randomName={faker.name.findName()} randomImage={faker.image.avatar()} comment={faker.lorem.sentence()}/>
        <Comment randomName={faker.name.findName()} randomImage={faker.image.avatar()} comment={faker.lorem.sentence()}/>
        <Comment randomName={faker.name.findName()} randomImage={faker.image.avatar()} comment={faker.lorem.sentence()}/>
        <Comment randomName={faker.name.findName()} randomImage={faker.image.avatar()} comment={faker.lorem.sentence()}/>
      </div>
      <ApprovalCards />
    </div>
  );
}

export default App;
