import React from 'react';
import ReactDOM from 'react-dom';
import { observable, autorun } from 'mobx'
import logo from './logo.svg';
import './index.css';

class Person {
  @observable name = 'jian'
  @observable age = 30
}

const person = new Person();

autorun(()=>{
  console.log(person.name, person.age)
})

person.name = 'jian';
person.age = 32;


const App = () => (
  <div className="App">
    <img className="App-Logo" src={logo} alt="React Logo" />
    <h1 className="App-Title">Hello Parcel x React</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
