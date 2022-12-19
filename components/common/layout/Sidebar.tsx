import Link from 'next/link';
import { ReactNode } from 'react';

import Category from 'components/common/Category';

import HOME_24 from 'src/assets/icons/common/home_24.svg';
import PENCIL_24 from 'src/assets/icons/common/pencil_24.svg';
import SEARCH_24 from 'src/assets/icons/common/search_24.svg';
import SETTING_24 from 'src/assets/icons/common/setting_24.svg';

// COMPONENT main component
const Sidebar: React.FC = () => {
  return (
    <aside className='Sidebar'>
      <SidebarMenu />
      <Category className='Sidebar__category' />
    </aside>
  );
};

// COMPONENT  사이드바 메뉴
export const SidebarMenu: React.FC = () => {
  const menuList = [
    { icon: <HOME_24 />, text: '홈', link: '#' },
    { icon: <PENCIL_24 />, text: '새 글 작성', link: '#' },
    { icon: <SEARCH_24 />, text: '검색', link: '#' },
    { icon: <SETTING_24 />, text: '설정', link: '#' },
  ];

  return (
    <nav className='Sidebar__menu'>
      <ul className='Sidebar__menu-list'>
        {menuList.map((el) => {
          return <SidebarMenuItem key={el.text} {...el} />;
        })}
      </ul>
    </nav>
  );
};

// COMPONENT 사이드바 메뉴 아이템
const SidebarMenuItem: React.FC<SidebarMenuItemPropType> = (props) => {
  return (
    <li className='Sidebar__menu-item'>
      <Link href={props.link} title={props.text}>
        {props.icon}
        <span className='Sidebar__menu-text'>{props.text}</span>
      </Link>
    </li>
  );
};

// PARAM type
type SidebarMenuItemPropType = {
  icon: ReactNode;
  link: string;
  text: string;
};

export default Sidebar;
