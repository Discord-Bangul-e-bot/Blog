import Footer from 'components/common/layout/Footer';
import Header from 'components/common/layout/Header';
import Main from 'components/main/Main';
import Page from 'components/common/layout/Page';

export default function Home() {
  return (
    <>
      <Header />
      <Page>
        <Main />
      </Page>

      <Footer />
    </>
  );
}
