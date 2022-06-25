import * as React from 'react';
import { Container } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
// @ts-ignore
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Quote from './quote/Quote';
import Coverage from './coverage/Coverage';
import Rate from './rate/Rate';
import Certificate from './certificate/Certificate';
import Progress, { Level } from '../../../common/progress/Progress';
import QuoteWidget from '@/pages/quote';
import Message from '@/components/Message';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function CreateQuote() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const progressLevel = ['Quote', 'Coverage', 'Rate', 'Certificate'];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Container component="main" maxWidth="md" sx={{ padding: 0 }}>
      <Box sx={{ bgcolor: 'background.paper' }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="quotation flow"
            sx={{
              color: 'blue',
              fontWeight: 'bolder',
              backgroundColor: 'white !important',
              borderColor: 'white !important',
            }}
          >
            <Tab label="Quote" {...a11yProps(0)} />
            <Tab label="Coverage" {...a11yProps(1)} />
            <Tab label="Rate" {...a11yProps(2)} />
            <Tab label="Certificate" {...a11yProps(3)} />
          </Tabs>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        </AppBar>
        <Progress level={progressLevel[value] as Level} />
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <QuoteWidget />
            {/* <Quote /> */}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Coverage />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Rate />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Certificate />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Container>
  );
}
