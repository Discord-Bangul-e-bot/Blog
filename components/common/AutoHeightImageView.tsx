import Image, { ImageProps } from 'next/image';

const AutoHeightImageView = ({ ...props }: ImageProps): React.ReactElement => {
  return (
    <div className='AutoHeightImage'>
      <Image
        layout='fill'
        className='AutoHeightImage__img'
        {...props}
        alt={props.alt}
      />
    </div>
  );
};

export default AutoHeightImageView;
