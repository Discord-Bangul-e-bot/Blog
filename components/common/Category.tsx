import Link from 'next/link';

const Category: React.FC<CategoryPropsType> = (props) => {
  const categoryMenu = [
    { title: '김방울의 일기', link: '#', postNumber: 10 },
    { title: 'Python', link: '#', postNumber: 25 },
    { title: 'Javascript', link: '#', postNumber: 38 },
  ];
  return (
    <nav className={props.className ? props.className : 'Category'}>
      <h2 className='Category__title'>Category</h2>
      <ul className='Category__menu'>
        {categoryMenu.map((el) => {
          return (
            <li className='Category__menu-item' key={el.title}>
              <Link href={el.link}>
                <span className='Category__menu-name'>{el.title}</span>
                <span className='Category__menu-post'>{`(${el.postNumber})`}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

type CategoryPropsType = {
  className?: string;
};

export default Category;
