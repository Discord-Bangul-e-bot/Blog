import { makeAutoObservable } from 'mobx';

export interface headerStoreData {
  isOpenSidebar: boolean;
}

class headerStore {
  constructor() {
    makeAutoObservable(this);
  }

  isOpenSidebar = false;

  setIsOpenSidebar() {
    this.isOpenSidebar = !this.isOpenSidebar;
  }
}

const store = new headerStore();

export default store;
