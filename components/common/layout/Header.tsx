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
            <Button>Login</Button>
            <Button className='Button--round'>
              <SUN_24 />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
