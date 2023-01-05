import Profile from 'components/common/Profile';
import PostInfo from 'components/post/PostInfo';
import PostNavigation from 'components/post/PostNavigation';
import PostComment from 'components/post/PostComment';

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
      <section className='Post__content'></section>
      <Profile />
      <PostNavigation />
      <PostComment />
    </section>
  );
};

export default Post;
