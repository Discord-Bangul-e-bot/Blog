import AutoHeightImageView from 'components/common/AutoHeightImageView';

import SAMPLE01 from 'src/assets/images/sample01.png';

const Profile = () => {
  return (
    <div className='Profile'>
      <div className='Profile__img'>
        <AutoHeightImageView src={SAMPLE01} alt='프로필 이미지' />
      </div>
      <div className='Profile__info-container'>
        <div className='Profile__name-container'>
          <h1 className='Profile__name'>샌드링</h1>
          <div className='Profile__id'>@Sandring</div>
        </div>
        <p className='Profile__introduce'>
          하이헬로안녕까꿍 에린의 핫섹시큐티 청순가련아이콘 샌드링이여요
        </p>
      </div>
    </div>
  );
};

export default Profile;
