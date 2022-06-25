import { useMemo } from 'react';
import * as Yup from 'yup';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useAuthContext } from '@/context/AuthContext';
import AuthWrapper from '@/components/AuthWrapper';
import { FORGOT_PASSWORD_PATH, LOGIN_PATH, SIGNUP_PATH } from '@/utils/paths';
import classes from './styles.module.scss';
import TextField, { PasswordField } from '@/components/TextField';

export default function Login() {
  const { state } = useLocation();
  const { login } = useAuthContext();
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      }),
    [],
  );
  const isEmailState = (state: any): state is { email: string } => state && state.email;
  const initialValues = { email: isEmailState(state) ? state.email : '', password: '' };

  return (
    <AuthWrapper
      initialValues={initialValues}
      title="Log In"
      links={[
        {
          title: 'Sign Up',
          to: SIGNUP_PATH,
        },
        {
          title: 'Log In',
          to: LOGIN_PATH,
          isActive: true,
        },
      ]}
      onSubmit={login}
      submitButtonLabel="Log In"
      validationSchema={validationSchema}
    >
      <>
        <Box mb={2}>
          <TextField id="email" label="Email" name="email" type="email" fullWidth />
        </Box>
        <Box>
          <PasswordField id="password" label="Password" name="password" fullWidth />
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Link to={FORGOT_PASSWORD_PATH} className={classes.link}>
            Forgot password
          </Link>
        </Box>
      </>
    </AuthWrapper>
  );
}
