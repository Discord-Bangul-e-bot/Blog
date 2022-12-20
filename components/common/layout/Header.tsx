import Link from 'next/link';
import { observer } from 'mobx-react';
import useStore from 'store/useStore';
import { useEffect } from 'react';

import { useResize } from 'src/utils/utils';
import mediaSize from 'src/styles/mediaSize';
import Button from 'components/common/Button';
import { SidebarMenu } from 'components/common/layout/Sidebar';
import Category from 'components/common/Category';

import SUN_24 from 'src/assets/icons/common/sun_24.svg';
import CLOSE_24 from 'src/assets/icons/common/close_24.svg';
import CLOSE_18 from 'src/assets/icons/common/close_18.svg';

const Header: React.FC = () => {
  // PARAM size 관련
  const size = useResize();

  useEffect(() => {
    console.log(`width: ${size.width}, height: ${size.height}`);
  }, [size.width, size.height]);

  const onClickMenuBtn = () => {
    useStore.headerStore.setIsOpenSidebar();
    return;
  };

  const getIsSidebarClassName = () => {
    if (useStore.headerStore.isOpenSidebar) {
      return 'Header__sidebar';
    } else {
      return 'Header__sidebar--close';
    }
  };

  return (
    <>
      <header className='Header'>
        <div className='Header__inner'>
          <div className='Header__title'>
            <Link href='/'>SANDRING Blog</Link>
          </div>
          <div className='Header__button-container'>
            <Button className='Header__button-login'>Login</Button>
            <Button className='Header__button-darkmode'>
              <SUN_24 />
            </Button>
          </div>
          <button className='Header__menu-button' onClick={onClickMenuBtn}>
            <span className='Header__menu-bar'></span>
            <span className='Header__menu-bar'></span>
            <span className='Header__menu-bar'></span>
          </button>
        </div>
        <div className={getIsSidebarClassName()}>
          <div className='Header__sidebar-inner'>
            <div className='Header__sidebar-close-container'>
              {size.width && size.width > mediaSize.mobileSize ? (
                <CLOSE_24
                  className='Header__sidebar-close-btn'
                  onClick={onClickMenuBtn}
                />
              ) : (
                <CLOSE_18
                  className='Header__sidebar-close-btn'
                  onClick={onClickMenuBtn}
                />
              )}
            </div>
            <nav className='Header__sidebar-menu'>
              <Category />
              <SidebarMenu />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default observer(Header);
