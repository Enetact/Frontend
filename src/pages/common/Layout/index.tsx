import type { ReactElement } from '@/types/common';
import { Container } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import classes from './styles.module.scss';

type LayoutType = {
  children: ReactElement;
  header?: ReactElement;
  footer?: ReactElement;
  noHeader?: boolean;
  noFooter?: boolean;
};
const Layout = ({ children, header, footer, noFooter, noHeader }: LayoutType) => {
  return (
    <div className={classes.layout}>
      {!noHeader ? header ?? <Header className={classes.header} /> : null}
      <Container component="main" className={classes.main}>
        {children}
      </Container>
      {!noFooter ? footer ?? <Footer className={classes.footer} /> : null}
    </div>
  );
};

export default Layout;
