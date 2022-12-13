import Link from 'next/link';
import AutoHeightImageView from 'components/common/AutoHeightImageView';
import TagList, { TagPropsType } from 'components/common/TagList';

import SAMPLE01 from 'src/assets/images/sample01.png';

// COMPONENT article List
const ArticleList: React.FC<ArticleListType> = (props) => {
  return (
    <>
      <ul className={props.className ? props.className : 'ArticleList'}>
        {props.list.map((el, idx) => {
          return <Article key={`post${idx}`} {...el} />;
        })}
      </ul>
    </>
  );
};

// COMPONENT 단일 article
export const Article: React.FC<ArticlePropsType> = (props) => {
  return (
    <>
      <li className='Article'>
        <Link href={props.link}>
          <div className='Article__thumb'>
            <AutoHeightImageView
              src={SAMPLE01}
              objectFit='cover'
              alt='thumbnail image'
            />
          </div>
          <div className='Article__title-container'>
            <h3 className='Article__title'>{props.title}</h3>

            <span className='Article__comment'>
              {' '}
              {'['}
              {`${props.comment}`}
              {']'}
            </span>
          </div>
          <p className='Article__content'>{props.content}</p>
          {props.tag && (
            <TagList className='Article__TagList' list={props.tag} />
          )}
        </Link>
      </li>
    </>
  );
};

// PARAM type
type ArticleListType = {
  [key: string]: any;
  list: ArticlePropsType[];
};
type ArticlePropsType = {
  id: number;
  title: string;
  content: string;
  tag?: TagPropsType[];
  comment: number;
  link: string;
};

export default ArticleList;
