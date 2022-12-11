import { ReactNode } from 'react';
import Sidebar from 'components/common/layout/Sidebar';

const Page: React.FC<PageComponentPropType> = (props) => {
  return (
    <div className='Page'>
      <div className='Page__inner'>
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

// PARAM type
type PageComponentPropType = {
  [key: string]: any;
  children: ReactNode;
};

export default Page;
