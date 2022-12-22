import { makeAutoObservable } from 'mobx';

export interface headerStoreData {
  isOpenSidebar: boolean;
  isDarkMode: boolean;
}

class headerStore {
  constructor() {
    makeAutoObservable(this);
  }
  // PARAM observable
  isOpenSidebar = false;
  isDarkMode = false;

  // FUNCTION action
  setIsOpenSidebar() {
    this.isOpenSidebar = !this.isOpenSidebar;
    return;
  }
  setIsDarkMode(state: boolean) {
    this.isDarkMode = state;
    console.log(this.isDarkMode);
    return;
  }

  // FUNCTION computed
  get sidebarAnimation() {
    if (this.isOpenSidebar) {
      return { right: '0' };
    }
    return { right: '-40vw' };
  }

  get darkModeClassName() {
    if (!this.isDarkMode) {
      return 'light';
    }
    return 'dark';
  }
}

const store = new headerStore();

export default store;
