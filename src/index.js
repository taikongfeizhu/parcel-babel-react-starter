import React from 'react';
import ReactDOM from 'react-dom';
import { observable, extendObservable, autorun, computed } from 'mobx'
import logo from './logo.svg';
import './index.css';

class OrderLine {
  @observable price;
  @observable amount;

  constructor() {
    this.price = 0;
    this.amount = 1;
  }

  @computed get total() {
    return this.price * this.amount;
  }
}

const ol = new OrderLine();

autorun(()=>{
  console.log(ol.price, ol.amount, ol.amount)
})

ol.price = 3


const App = () => (
  <div className="App">
    <img className="App-Logo" src={logo} alt="React Logo" />
    <h1 className="App-Title">Hello Parcel React</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
