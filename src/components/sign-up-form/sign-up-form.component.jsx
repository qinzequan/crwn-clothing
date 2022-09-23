import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;
    if (password !== confirmPassword) return;
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') alert('用户已注册');
      console.log(error.message);
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <div className="title">
        <h2>Don't have an account?</h2>
        <p>Sign up with your email and password</p>
      </div>
      <FormInput label="Display Name" name="displayName" type="text" onChange={handleChange} value={displayName} required />
      <FormInput label="Email" name="email" type="email" onChange={handleChange} value={email} required />
      <FormInput label="Password" name="password" type="password" onChange={handleChange} value={password} required />
      <FormInput label="Confirm Password" name="confirmPassword" type="password" onChange={handleChange} value={confirmPassword} required />
      <Button className="mt-10" buttonType={'base'}>
        sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
