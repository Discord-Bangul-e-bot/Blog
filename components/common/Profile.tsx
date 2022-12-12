import Link from 'next/link';
import AutoHeightImageView from 'components/common/AutoHeightImageView';
import { ReactNode } from 'react';

import SAMPLE01 from 'src/assets/images/sample01.png';
import TWITTER_24 from 'src/assets/icons/common/twitter_24.svg';
import GITHUB_24 from 'src/assets/icons/common/github_24.svg';
import MAIL_24 from 'src/assets/icons/common/mail_24.svg';

const Profile = () => {
  const socialLink = {
    twitter: '#',
    github: '#',
    mail: '#',
  };
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
        <ul className='Profile__social'>
          <SocialListItem link={socialLink.twitter}>
            <TWITTER_24 />
          </SocialListItem>
          <SocialListItem link={socialLink.github}>
            <GITHUB_24 />
          </SocialListItem>
          <SocialListItem link={socialLink.mail}>
            <MAIL_24 />
          </SocialListItem>
        </ul>
      </div>
    </div>
  );
};

const SocialListItem: React.FC<SocialListItemPropsType> = (props) => {
  return (
    <li className='Profile__social-item'>
      <Link href={props.link} target='_blank'>
        {props.children}
      </Link>
    </li>
  );
};
type SocialListItemPropsType = {
  link: string;
  children: ReactNode;
};

export default Profile;
