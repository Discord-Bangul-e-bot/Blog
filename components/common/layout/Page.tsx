import { ReactNode } from 'react';

const Page: React.FC<PageComponentPropType> = (props) => {
  return (
    <section className='Page'>
      <div className='Page__inner'>{props.children}</div>
    </section>
  );
};

// PARAM type
type PageComponentPropType = {
  [key: string]: any;
  children: ReactNode;
};

export default Page;
