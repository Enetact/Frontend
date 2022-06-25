import { useState } from 'react';
import cx from 'classnames';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import UndoIcon from '@mui/icons-material/Undo';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppContext } from '@/context/AppContext';
import Dropdown from '../Dropdown';
import classes from './styles.module.scss';
import { LOGOUT_PATH, LOGIN_PATH, RETRIEVE_QUOTE_PATH, SIGNUP_PATH } from '@/utils/paths';
import { useAuthContext } from '@/context/AuthContext';

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  const { isLoggedIn } = useAuthContext();
  const [value, setValue] = useState(0);
  const { tabIndex, setTabIndex } = useAppContext();

  const handleBack = () => {
    if (tabIndex > 0) setTabIndex(v => v - 1);
  };

  return (
    <footer className={cx(classes.footer, className)}>
      <Box>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className={classes.footerNavigation}
        >
          {isLoggedIn ? (
            <BottomNavigationAction
              icon={
                <Dropdown
                  items={[
                    {
                      title: 'Log Out',
                      to: LOGOUT_PATH,
                    },
                    {
                      title: 'Retrieve Quote',
                      to: RETRIEVE_QUOTE_PATH,
                    },
                  ]}
                  icon={<MenuIcon />}
                />
              }
            />
          ) : (
            <BottomNavigationAction
              icon={
                <Dropdown
                  items={[
                    {
                      title: 'Log In',
                      to: LOGIN_PATH,
                    },
                    {
                      title: 'Sign Up',
                      to: SIGNUP_PATH,
                    },
                    {
                      title: 'Retrieve Quote',
                      to: RETRIEVE_QUOTE_PATH,
                    },
                  ]}
                  icon={<MenuIcon />}
                />
              }
            />
          )}
          <BottomNavigationAction icon={<UndoIcon />} onClick={handleBack} />
          <BottomNavigationAction icon={<HelpIcon />} />
        </BottomNavigation>
      </Box>
    </footer>
  );
};
export default Footer;
