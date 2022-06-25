import { Box, Typography } from '@mui/material';
import AuthWrapper from '@/components/AuthWrapper';
import CheckboxInput from '@/components/FormInput/CheckboxInput';
import PasswordInput from '@/components/FormInput/PasswordInput';
import TextInput from '@/components/FormInput/TextInput';
import { PageLink } from '@/types/common';
import { LOGIN_PATH, SIGNUP_PATH } from '@/utils/paths';
import { useAuthContext } from '@/context/AuthContext';

export default function SignUp() {
  const { signup } = useAuthContext();
  const links: PageLink[] = [
    {
      title: 'Sign Up',
      to: SIGNUP_PATH,
      isActive: true,
    },
    {
      title: 'Log In',
      to: LOGIN_PATH,
    },
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreements: {
      termsAndConditions: false,
      marketingCommunication: false,
    },
  };

  return (
    <AuthWrapper
      initialValues={initialValues}
      links={links}
      onSubmit={signup}
      submitButtonLabel="Sign Up"
      title="Sign Up"
    >
      <>
        <TextInput id="firstname" name="firstName" label="First name" required />
        <TextInput id="lastname" name="lastName" label="Last name" required />
        <TextInput id="email" name="email" label="Email" type="email" required />
        <PasswordInput id="password" name="password" label="Password" required />
        <Box mt={2}>
          <CheckboxInput
            id="terms"
            name="agreements.termsAndConditions"
            label="I have read the Electronic delivery terms and agree to paperless delivery"
            required
          />
          <CheckboxInput
            id="marketing"
            name="agreements.marketingCommunication"
            label="I allow you to send any marketing emails that can include coupons, deals and
              promotions."
          />
        </Box>
        <Box mt={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Typography variant="caption">
            We guarantee 100% your privacy. We wont spam you.
          </Typography>
        </Box>
      </>
    </AuthWrapper>
  );
}
