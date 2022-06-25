import Footer from '@/components/Footer';
import { Container } from '@mui/material';
import classes from './styles.module.scss';

const AuthLayout = ({ children }: any) => {
  return (
    <div className={classes.layout}>
      <Container component="main" className={classes.main}>
        {children}
      </Container>
      <Footer className={classes.footer} />
    </div>
  );
};

export default AuthLayout;
