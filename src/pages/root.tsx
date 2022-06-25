import { useCallback, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { AppBar, Container, Tabs, Tab, Toolbar, Typography, Box, Avatar } from '@mui/material';
// @ts-ignore
import FaceIcon from '@mui/icons-material/Face';
import Progress, { Level } from '@/common/progress/Progress';
import QuoteWidget from '@/pages/quote';
import CoverageWidget from '@/pages/coverage';
import LoadingState from '@/components/LoadingState';
import useFetcher from '@/hooks/useFetcher';
import { useAppContext } from '@/context/AppContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ENDPOINTS } from '@/utils/constants';
import Layout from './common/Layout';
import HourlyRate from './common/EstimatedRate/HourlyRateInfo';
import RateWidget from '@/pages/rate';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const MascotHeader = () => {
  return (
    <AppBar position="static" sx={{ zIndex: 10000 }}>
      <Container>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            sx={{
              backgroundColor: '#8f9dda',
              width: 30,
              height: 30,
              mr: 1,
            }}
          >
            <FaceIcon />
          </Avatar>
          <Typography variant="h6" noWrap component="div" fontSize={16}>
            Mascot
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default function Landing() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { tabIndex, setTabIndex, quotePayload, setQuotePayload } = useAppContext();
  const [params] = useSearchParams();
  const progressLevel = ['Quote', 'Coverage', 'Rate', 'Certificate'];
  const zipCode = params.get('zipcode') || '';
  // TODO:: refactor `ENDPOINTS` for parametized endpoints
  const fetcher = useFetcher(`${ENDPOINTS.STATE_BY_ZIPCODE}/${zipCode}`, {
    enabled: !!zipCode,
  });

  useEffect(() => {
    if (!fetcher.isLoading && fetcher.isError) {
      navigate('/stop');
    }
    if (!fetcher.isLoading && fetcher.isSuccess && fetcher.data) {
      const { name: state, code } = fetcher.data;
      setQuotePayload({ state, stateCode: code, firstName: params.get('name'), zipCode });
    }
  }, [fetcher.isLoading, fetcher.isError, fetcher.isSuccess, fetcher.data, zipCode]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setTabIndex(index);
  };

  const handleSubmit = useCallback(
    values => {
      setTabIndex(v => v + 1);
      setQuotePayload(values);
    },
    [setQuotePayload, setTabIndex],
  );

  return (
    <Layout header={<MascotHeader />}>
      <LoadingState loading={fetcher.isLoading}>
        {!fetcher.isError && quotePayload ? (
          <Box display="flex" flexDirection="column" height="100%">
            <AppBar position="sticky">
              <Tabs
                value={tabIndex}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="quotation flow"
                sx={{
                  color: 'blue',
                  fontWeight: '600',
                  backgroundColor: 'white !important',
                  borderColor: 'white !important',
                }}
              >
                <Tab label="Quote" {...a11yProps(0)} />
                <Tab label="Coverage" {...a11yProps(1)} />
                <Tab label="Rate" {...a11yProps(2)} />
                <Tab label="Certificate" {...a11yProps(3)} />
              </Tabs>
              <Progress level={progressLevel[tabIndex] as Level} />
            </AppBar>
            <SwipeableViews
              id="scroll-container"
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={tabIndex}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={tabIndex} index={0} dir={theme.direction}>
                <QuoteWidget onSubmit={handleSubmit} />
              </TabPanel>
              <TabPanel value={tabIndex} index={1} dir={theme.direction}>
                <CoverageWidget onSubmit={handleSubmit} />
              </TabPanel>
              <TabPanel value={tabIndex} index={2} dir={theme.direction}>
                <RateWidget onSubmit={handleSubmit} />
              </TabPanel>
            </SwipeableViews>
            <Box position="sticky" bottom={0} marginTop="auto">
              <HourlyRate />
            </Box>
          </Box>
        ) : null}
      </LoadingState>
    </Layout>
  );
}
