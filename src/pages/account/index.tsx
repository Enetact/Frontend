import React from 'react';
import Link from '@/components/Link';
import { Box } from '@mui/material';
import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout';
import Profile from './Profile';
import ReportIssue from './ReportIssue';
import classes from './styles.module.scss';

const Account = () => {
  return (
    <Layout noFooter>
      <Box px={2} mt={2} display="flex">
        <h2 className={classes.heading}>Support</h2>
        <nav className={classes.navbar}>
          <Link to="" className={classes.navbarLink}>
            Profile
          </Link>
          <Link to="issue" className={classes.navbarLink}>
            Report an issue
          </Link>
        </nav>
      </Box>
      <Outlet />
    </Layout>
  );
};

export default React.memo(() => {
  return (
    <Routes>
      <Route element={<Account />}>
        <Route index element={<Profile />} />
        <Route path="issue" element={<ReportIssue />} />
      </Route>
    </Routes>
  );
});
