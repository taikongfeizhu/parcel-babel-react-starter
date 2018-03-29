import {observable, action, computed} from "mobx";
import axios from "axios";

export default class AppState {
  @observable authenticated;
  @observable authenticating;
  @observable items;
  @observable item;
  @observable testval;
  
  constructor() {
    this.authenticated = false;
    this.authenticating = false;
    this.items = [];
    this.item = {};
    this.testval = "Huang Jian";
  }
  
  async fetchData(pathname, id) {
    const {data} = await axios.get(
      `https://easy-mock.com/mock/5abcdb2ed3f10a76f2e720c5/api${pathname}`
    );
    data.length > 0 ? this.setData(data) : this.setSingle(data);
  }
  
  @action setData(data) {
    this.items = data;
  }
  
  @action setSingle(data) {
    this.item = data;
  }
  
  @action clearItems() {
    this.items = [];
    this.item = {};
  }
  
  @action authenticate(status) {
    return new Promise((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = status;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 1000);
    });
  }
  
  @computed get getItem() {
    return this.items.filter((todo) => todo.id === 1)
  }
}
