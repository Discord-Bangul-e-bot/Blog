import { useEffect, useState } from 'react';
import mediaSize from 'src/styles/mediaSize';

// FUNCTION 모바일 웹 resize 관련
export const useResize = () => {
  const [windowSize, setWindowSize] = useState<SizeType>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const useSetMobileMode = (size: SizeType, className: string) => {
  useEffect(() => {
    const htmlDOM = document.querySelector('html');

    if (size.width && size.width <= mediaSize.mobileSize) {
      htmlDOM?.classList.add(className);
    } else if (htmlDOM?.classList.contains(className)) {
      htmlDOM?.classList.remove(className);
    }
    return;
  }, [size, className]);
  return;
};

type SizeType = {
  width?: number;
  height?: number;
};

// type IamGenericFunction<IamGeneric={}>=(arg:IamGeneric)=>IamGeneric

// function  genericFunction:IamGenericFunction<>(arg){
//   return arg

// }

// const whoAmI = genericFunction<{arg1:10,arg2:20}>({
//   arg1:10,
//   arg2:20
// })

// whoAmI.arg1
