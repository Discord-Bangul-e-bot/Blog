import Link from 'next/link';
import Button from 'components/common/Button';

import SUN_24 from 'src/assets/icons/common/sun_24.svg';

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
      </header>
    </>
  );
};

export default Header;
