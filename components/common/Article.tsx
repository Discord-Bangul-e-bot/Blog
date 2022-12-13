import Link from 'next/link';
import AutoHeightImageView from 'components/common/AutoHeightImageView';
import TagList, { TagPropsType } from 'components/common/TagList';

import SAMPLE01 from 'src/assets/images/sample01.png';

// COMPONENT article List
const ArticleList = () => {
  return (
    <>
      <ul></ul>
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
            <AutoHeightImageView src={SAMPLE01} alt='thumbnail image' />
            <div className='Article__title-container'>
              <h3 className='Article__title'>{props.title}</h3>
              <span className='Article__comment'>{`${props.comment}`}</span>
            </div>
            <p className='Article__content'>{props.content}</p>
            <TagList list={props.tag} />
          </div>
        </Link>
      </li>
    </>
  );
};

// PARAM type
type ArticlePropsType = {
  title: string;
  content: string;
  tag: TagPropsType[];
  comment: number;
  link: string;
};
