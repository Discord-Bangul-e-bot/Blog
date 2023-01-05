import Button from 'components/common/Button';

const PostComment = () => {
  return (
    <section className='PostComment'>
      <div className='PostComment__counter'>
        <span className='PostComment__counter-count'>0</span> Comment
      </div>
      <form className='PostComment__input-container'>
        <input
          className='PostComment__input--name'
          type='text'
          placeholder='이름'
        />
        <input
          className='PostComment__input--password'
          type='password'
          placeholder='비밀번호'
        />
        <textarea className='PostComment__textarea' />
      </form>
      <Button className='PostComment__submit-button'>댓글 작성</Button>
    </section>
  );
};

export default PostComment;
