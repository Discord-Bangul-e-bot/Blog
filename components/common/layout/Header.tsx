import Link from 'next/link';
import Button from 'components/common/Button';
import { SidebarMenu } from 'components/common/layout/Sidebar';
import Category from 'components/common/Category';

import SUN_24 from 'src/assets/icons/common/sun_24.svg';
import CLOSE_18 from 'src/assets/icons/common/close_18.svg';

const Header: React.FC = () => {
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
          <button className='Header__menu-button'>
            <span className='Header__menu-bar'></span>
            <span className='Header__menu-bar'></span>
            <span className='Header__menu-bar'></span>
          </button>
        </div>
        <div className='Header__sidebar'>
          <div className='Header__sidebar-inner'>
            <div className='Header__sidebar-close-container'>
              <CLOSE_18 className='Header__sidebar-close-btn' />
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

export default Header;
