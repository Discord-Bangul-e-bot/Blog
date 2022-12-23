import { ReactNode } from 'react';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import useStore from 'store/useStore';

const ThemeProvider: React.FC<ThemeProviderPropsType> = (props) => {
  // FUNCTION 초기 다크모드 감지 및 설정
  const getPreferColorScheme = useEffect(() => {
    const colorScheme = getComputedStyle(document.body, ':after').content;
    if (colorScheme === `"dark"`) {
      useStore.headerStore.setIsDarkMode(true);
    }
    return;
  }, []);

  return (
    <div className={useStore.headerStore.darkModeClassName}>
      {props.children}
    </div>
  );
};

type ThemeProviderPropsType = {
  children: ReactNode;
};

export default observer(ThemeProvider);
