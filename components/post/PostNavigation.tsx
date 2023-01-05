import Link from 'next/link';

const PostNavigation = () => {
  return (
    <div className='PostNavigation__container'>
      <div className='PostNavigation__navigation--prev'>
        <Link href='#'>
          <div className='PostNavigation__post-category'>이전 글</div>
          <h2 className='PostNavigation__post-title'>글 제목</h2>
        </Link>
      </div>
      <div className='PostNavigation__navigation--next'>
        <Link href='#'>
          <div className='PostNavigation__post-category'>다음 글</div>
          <h2 className='PostNavigation__post-title'>글 제목</h2>
        </Link>
      </div>
    </div>
  );
};

export default PostNavigation;
