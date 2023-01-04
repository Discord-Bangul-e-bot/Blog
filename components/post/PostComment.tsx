const PostComment = () => {
  return (
    <section className='PostComment'>
      <div className='PostComment__counter'>
        <span className='PostComment__counter-count'>0</span> Comment
      </div>
      <form>
        <input type='text' placeholder='이름' />
        <input type='password' placeholder='비밀번호' />
        <textarea></textarea>
      </form>
    </section>
  );
};

export default PostComment;
