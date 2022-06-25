import { useState } from 'react';
import AuthWrapper from '@/components/AuthWrapper';
import TextInput from '@/components/FormInput/TextInput';
import { Box, Button, Typography } from '@mui/material';
import { PageLink } from '@/types/common';
import { forgotPassword, EmailPayload } from '@/services/authenticationService';
import { LOGIN_PATH, SIGNUP_PATH } from '@/utils/paths';
import classes from './styles.module.scss';

export default function ForgotPassword() {
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

  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [showResend, setShowResend] = useState(false);

  const sendRequest = async (payload: EmailPayload) => {
    setShowResend(false);
    const result = await forgotPassword(payload);

    setTimeout(() => {
      setShowResend(true);
    }, 15000);

    return result;
  };

  const handleSubmit = async (values: Record<string, any>) => {
    setEmail(values.email);

    const result = await sendRequest(values as EmailPayload);
    setIsSent(result);
  };

  const handleResend = async () => {
    await sendRequest({ email });
  };

  const initialValues = { email: '' };

  return (
    <AuthWrapper
      links={links}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      title="Forgot Password"
      isButtonDisabled={isSent}
    >
      <>
        {isSent && (
          <Box className={classes.success}>
            <Typography className={classes.successTitle}>Sent!</Typography>
            <Typography className={classes.successBody}>
              Check your e-mail inbox to verify your e-mail address.
            </Typography>
          </Box>
        )}
        <TextInput id="email" label="Email" name="email" type="email" required />
        {showResend && (
          <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
            <Button className={classes.resendButton} onClick={handleResend}>
              Resend email
            </Button>
          </Box>
        )}
      </>
    </AuthWrapper>
  );
}
