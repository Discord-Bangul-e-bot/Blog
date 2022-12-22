import { makeAutoObservable } from 'mobx';

export interface headerStoreData {
  isOpenSidebar: boolean;
}

class headerStore {
  constructor() {
    makeAutoObservable(this);
  }
  // PARAM observable
  isOpenSidebar = false;

  // FUNCTION action
  setIsOpenSidebar() {
    this.isOpenSidebar = !this.isOpenSidebar;
  }

  // FUNCTION computed
  get sidebarAnimation() {
    if (this.isOpenSidebar) {
      return { right: '0' };
    }
    return { right: '-40vw' };
  }
}

const store = new headerStore();

export default store;
