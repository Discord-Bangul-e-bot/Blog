import 'src/styles/style.scss';
import type { AppProps } from 'next/app';

import HeadInfo from 'components/common/HeadInfo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadInfo />
      <Component {...pageProps} />
    </>
  );
}
