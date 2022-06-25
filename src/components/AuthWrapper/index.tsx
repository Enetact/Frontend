import type { AnySchema } from 'yup';
import { useCallback, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Stack, Typography } from '@mui/material';
import AuthLayout from '@/pages/common/Layout/Auth';
import { PageLink } from '@/types/common';
import Button from '@/components/Button';
import { isAuthenticated } from '@/services/authenticationService';
import { DASHBOARD_PATH } from '@/utils/paths';
import { isEmpty } from '@/utils/helper';
import logo from '../../assets/images/MU-Logo.svg';
import classes from './styles.module.scss';

type AuthWrapperProps = {
  links: PageLink[];
  title?: string;
  children: string | JSX.Element;
  description?: string | JSX.Element;
  initialValues: Record<string, any>;
  onSubmit?: (values: Record<string, any>) => void;
  submitButtonLabel?: string;
  isButtonDisabled?: boolean;
  validationSchema?: AnySchema;
};

export default function AuthWrapper({
  links,
  title,
  children,
  description,
  initialValues,
  submitButtonLabel = 'Submit',
  isButtonDisabled = false,
  validationSchema,
  onSubmit,
}: AuthWrapperProps) {
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated().then(status => {
      if (status) {
        navigate(DASHBOARD_PATH);
      }
    });
  }, [navigate]);

  const handleSubmit = useCallback(
    values => {
      if (onSubmit) onSubmit(values);
    },
    [onSubmit],
  );

  return (
    <AuthLayout>
      <Container component="main" maxWidth="xs" className={classes.mainComponent}>
        <Box className={classes.mainComponentContainer}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <img src={logo} className="App-logo" alt="logo" width={200} />
          </Stack>

          <Box className={classes.navBar}>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={10}>
              {links.map((linkValue, index) => (
                <Box key={index}>
                  <Link
                    to={linkValue.to}
                    className={`${classes.navBarLink} ${
                      linkValue.isActive ? classes.navBarActive : ''
                    }`}
                  >
                    {linkValue.title}
                  </Link>
                </Box>
              ))}
            </Stack>
            {description && (
              <Stack>
                <Box mt={4} className={classes.formDescription}>
                  <Typography variant="body2" className={classes.formDescriptionText}>
                    {description}
                  </Typography>
                </Box>
              </Stack>
            )}
          </Box>
          <Stack className={classes.formContainer}>
            <Box mt={4} className={classes.formTitle}>
              <Typography variant="caption">{title}</Typography>
            </Box>
            <Box>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({ errors, isSubmitting }) => {
                  return (
                    <Form>
                      {children}
                      <Box mt={4}>
                        <Stack justifyContent="center" alignItems="center" spacing={2}>
                          <Button
                            type="submit"
                            color="secondary"
                            size="medium"
                            className={classes.formButton}
                            loading={isSubmitting}
                            disabled={!isEmpty(errors) || isSubmitting}
                          >
                            {submitButtonLabel}
                          </Button>
                        </Stack>
                      </Box>
                    </Form>
                  );
                }}
              </Formik>
            </Box>
          </Stack>
        </Box>
      </Container>
    </AuthLayout>
  );
}
