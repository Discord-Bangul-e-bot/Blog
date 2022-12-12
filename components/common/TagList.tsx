import Link from 'next/link';
import { useMemo } from 'react';

// COMPONENT 태그 리스트 출력
const TagList = (props: TagListPropsType) => {
  return (
    <ul className='TagList'>
      {props.list.map((el, idx) => {
        return <Tag {...el} key={`tag${idx}`} />;
      })}
    </ul>
  );
};

// COMPONENT 단일 태그
export const Tag = (props: TagPropsType) => {
  // FUNCTION 태그 출력 스타일 구하는 함수
  const getText = useMemo((): JSX.Element => {
    return (
      <>
        {props.hash && props.hash}
        {props.name}
        {props.number ? (
          <span className='Tag__number'>{props.number}</span>
        ) : null}
      </>
    );
  }, [props]);

  return (
    <li className='Tag'>
      {props.link ? <Link href={props.link}>{getText}</Link> : <>{getText}</>}
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
  number?: number;
};

export default TagList;
