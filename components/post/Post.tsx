import PostInfo from 'components/post/PostInfo';

const Post = () => {
  const postTagList = [
    { name: '고양이', hash: true },
    { name: '발바닥', hash: true },
    { name: '김방울', hash: true },
    { name: '코딩', hash: true },
  ];
  return (
    <section className='Post'>
      <PostInfo />
    </section>
  );
};

export default Post;
