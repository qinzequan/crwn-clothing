import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  const { value } = otherProps;
  return (
    <div className="form-input">
      <input className="form-input__input" {...otherProps} />
      <label className={`form-input__label ${value.length ? 'form-input__label--input' : ''}`}>{label}</label>
    </div>
  );
};

export default FormInput;
