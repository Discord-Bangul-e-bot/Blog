const Button: React.FC<ButtonComponentPropType> = (props) => {
  return (
    <button className='Button' {...props}>
      {props.children}
    </button>
  );
};

// PARAM type
type ButtonComponentPropType = {
  [key: string]: any;
};

export default Button;
