import { PageLink } from '@/types/common';
import AuthWrapper from '@/components/AuthWrapper';
import PasswordInput from '@/components/FormInput/PasswordInput';
import { LOGIN_PATH, SIGNUP_PATH } from '@/utils/paths';

export default function ResetPassword() {
  const links: PageLink[] = [
    {
      title: 'Sign Up',
      to: SIGNUP_PATH,
    },
    {
      title: 'Log In',
      to: LOGIN_PATH,
    },
  ];

  const handleSubmit = (values: Record<string, any>) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const initialValues = { password: '', confirmPassword: '' };

  return (
    <AuthWrapper
      links={links}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      title="Reset Password"
    >
      <>
        <PasswordInput id="password" label="Password" name="password" required />
        <PasswordInput
          id="confirmPassword"
          label="Confirm Password"
          name="confirm_password"
          required
        />
      </>
    </AuthWrapper>
  );
}
