import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = formFields;
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/wrong-password') alert('密码错误');
      console.log(error);
    }
  };

  const signUpGoogleUser = () => dispatch(googleSignInStart());
  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <div className="title">
        <h2>Already have an account?</h2>
        <p>Sign in with your email and password</p>
      </div>
      <FormInput label="Email" name="email" type="email" onChange={handleChange} value={email} required />
      <FormInput label="Password" name="password" type="password" onChange={handleChange} value={password} required />
      <div className="sign-in-form__button-box">
        <Button className="mt-10" buttonType="base">
          sign in
        </Button>
        <Button type="button" onClick={signUpGoogleUser} className="mt-10" buttonType="google">
          sign in with google
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
