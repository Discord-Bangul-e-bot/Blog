import Link from 'next/link';

import TagList from 'components/common/TagList';

const Post = () => {
  const postTagList = [
    { name: '고양이', hash: true },
    { name: '발바닥', hash: true },
    { name: '김방울', hash: true },
    { name: '코딩', hash: true },
  ];
  return (
    <section className='Post'>
      <div className='Post__info'>
        <h2 className='Post__cate'>
          <Link href='#'>샌드링 개발노트</Link>
        </h2>
        <div className='Post__title-container'>
          <h1 className='Post__title'>방울이 발바닥으로 코딩하기</h1>
          <div className='Post__comment-number'>0</div>
        </div>
        <dl className='Post__time'>
          <dd className='Post__time-cate'>작성</dd>
          <dt className='Post__time-item'>2022-10-01 19:09:33</dt>
          <dd className='Post__time-cate'>수정</dd>
          <dt className='Post__time-item'>2022-10-01 19:09:33</dt>
        </dl>
        <TagList className='Post__TagList' list={postTagList} />
      </div>
    </section>
  );
};

export default Post;
