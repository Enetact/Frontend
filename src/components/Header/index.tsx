import * as React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MaxwellLogo from '@/assets/images/maxwell-logo.svg';
import {
  LOGIN_PATH,
  ACCOUNT_PATH,
  SIGNUP_PATH,
  DASHBOARD_PATH,
  CREATE_QUOTE_PATH,
  RETRIEVE_QUOTE_PATH,
  LOGOUT_PATH,
} from '@/utils/paths';
import classes from './styles.module.scss';
import { useAuthContext } from '@/context/AuthContext';

const LUMenuItems = [
  { label: 'Profile', link: ACCOUNT_PATH },
  { label: 'New Quote', link: CREATE_QUOTE_PATH },
  { label: 'Retrieve Quote', link: RETRIEVE_QUOTE_PATH },
  { label: 'My Dashboard', link: DASHBOARD_PATH },
  { label: 'Log Out', link: LOGOUT_PATH },
];

const NLUMenuItems = [
  { label: 'Log In', link: LOGIN_PATH },
  { label: 'Sign Up', link: SIGNUP_PATH },
];

type HeaderProps = {
  className?: string;
};
const Header = ({ className }: HeaderProps) => {
  const { isLoggedIn } = useAuthContext();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={cx(classes.header, className)}>
      <Container>
        <Toolbar disableGutters>
          <Box className={classes.logoWrapper}>
            <img src={MaxwellLogo} alt="Maxwell Insurance" />
          </Box>

          <Box className={classes.menuItems}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
              className={classes.menuIconButton}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className={classes.menu}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {(isLoggedIn ? LUMenuItems : NLUMenuItems).map(({ label, link }: any) => (
                <Link key={link} to={link} className={classes.menuLink}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
