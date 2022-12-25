import 'src/styles/style.scss';
import type { AppProps } from 'next/app';

import { observer } from 'mobx-react';
import HeadInfo from 'components/common/HeadInfo';
import ThemeProvider from 'components/common/layout/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadInfo />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
