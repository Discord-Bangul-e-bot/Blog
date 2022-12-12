import Link from 'next/link';

const TagList = (props: TagListPropsType) => {
  return (
    <ul className='TagList'>
      {props.list.map((el, idx) => {
        return <Tag {...el} key={`tag${idx}`} />;
      })}
    </ul>
  );
};

export const Tag = (props: TagPropsType) => {
  return (
    <li className='Tag'>
      {props.link ? (
        <Link href={props.link}>{props.name}</Link>
      ) : (
        <>{props.name}</>
      )}
    </li>
  );
};

// PARAM type
type TagListPropsType = {
  list: TagPropsType[];
};

type TagPropsType = {
  name: string;
  link?: string;
  hash?: boolean;
};

export default TagList;
