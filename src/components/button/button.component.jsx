import './button.style.scss';

const BUTTON_TYPE_CLASSESTYPES = {
  base: 'button--base',
  google: 'button--google-sign-in',
  inverted: 'button--inverted',
};

const Button = ({ className, buttonType, children = 'add to card', ...otherProps }) => {
  return (
    <button className={`button ${BUTTON_TYPE_CLASSESTYPES[buttonType]} ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
