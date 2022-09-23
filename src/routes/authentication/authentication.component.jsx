// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentUser } from '../../store/user/user.action';
// import { selectCurrentUser } from '../../store/user/user.selector';
// import { USER_ACTION_TYPES } from '../../store/user/user.types';
// import { createAction } from '../../utils/reducer/reducer.utils';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
