import Profile from 'components/common/Profile';
import TagList from 'components/common/TagList';
import ArticleList from 'components/common/Article';

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
  const articleList = [
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
  ];

  return (
    <section className='Main'>
      <Profile />
      <TagList className='Main__TagList' list={postTagList} />
      <section className='Main__Article-section'>
        <h2 className='Main__Article-title'>Recent Articles</h2>
        <ArticleList className='Main__ArticleList' list={articleList} />
      </section>
    </section>
  );
};

export default Main;
