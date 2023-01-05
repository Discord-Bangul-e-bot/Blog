import Footer from 'components/common/layout/Footer';
import Header from 'components/common/layout/Header';
import Page from 'components/common/layout/Page';
import Post from 'components/post/Post';

export default function index() {
  return (
    <>
      <Header />
      <Page>
        <Post />
      </Page>
      <Footer />
    </>
  );
}
