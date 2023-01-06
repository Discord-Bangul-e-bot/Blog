import Image from 'next/image';
import AutoHeightImageView from 'components/common/AutoHeightImageView';

import SAMPLE01 from 'src/assets/images/sample01.png';

const CommentList = () => {
  return (
    <ul className='CommentList'>
      <CommentItem />
      <CommentItem />
    </ul>
  );
};

const CommentItem = () => {
  return (
    <li className='CommentItem'>
      <div className='CommentItem__thumb'>
        <AutoHeightImageView src={SAMPLE01.src} alt='' />
      </div>
      <div className='CommentItem__contents-container'>
        <div className='CommentItem__info'>
          <div className='CommentItem__name-container'>
            <h2 className='CommentItem__name'>김방울</h2>
            <h3 className='CommentItem__id'>@Kimbangul</h3>
          </div>
          <div className='CommentItem__date'>2022-12-09 00:47:58</div>
        </div>
        <p className='CommentItem__contents'>
          나는야 방울이 귀엽고 깜찍하지 야옹
        </p>
      </div>
    </li>
  );
};

export default CommentList;
