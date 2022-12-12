import Profile from 'components/common/Profile';
import TagList from 'components/common/TagList';

const Main = () => {
  const postTagList = [
    { name: '전체보기', link: '#' },
    { name: 'JavaScript', number: 10, hash: true, link: '#' },
    { name: 'Python', number: 25, hash: true, link: '#' },
    { name: 'Python', number: 3, hash: true, link: '#' },
    { name: 'JavaScript', number: 10, hash: true, link: '#' },
    { name: 'Python', number: 25, hash: true, link: '#' },
    { name: 'Python', number: 3, hash: true, link: '#' },
    { name: 'JavaScript', number: 10, hash: true, link: '#' },
    { name: 'Python', number: 25, hash: true, link: '#' },
    { name: 'Python', number: 3, hash: true, link: '#' },
    { name: 'JavaScript', number: 10, hash: true, link: '#' },
    { name: 'Python', number: 25, hash: true, link: '#' },
    { name: 'Python', number: 3, hash: true, link: '#' },
  ];
  return (
    <section className='Main'>
      <Profile />
      <TagList className='Main__TagList' list={postTagList} />
      <div className='main'>hello!</div>
    </section>
  );
};

export default Main;
