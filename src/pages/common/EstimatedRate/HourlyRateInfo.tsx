import useQuotation from '@/hooks/useQuotation';
import { toUSD } from '@/utils/currency';
import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import classes from './styles.module.scss';
import { useState } from 'react';
import Button from '@/components/Button';
import Loader from '@/components/Loader';

const HourlyRate = () => {
  const quotation = useQuotation();
  const [showRegistration, setShowRegistration] = useState(false);

  const hourlyRate =
    !quotation.isLoading && quotation.data ? toUSD(quotation.data?.hourlyRate) : null;

  return (
    <>
      <Box className={classes.wrapper}>
        <Stack
          direction={'column'}
          spacing={0.5}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {showRegistration && (
            <CloseIcon
              className={classes.closeButton}
              data-testid="closeRegisterButton"
              onClick={() => setShowRegistration(false)}
            />
          )}
          <div>ESTIMATED HOURLY RATE</div>
          <Typography className={classes.hourlyRate}>
            {hourlyRate ? (
              <span data-testid="hourlyRate">{hourlyRate} per hour</span>
            ) : (
              <Loader size={20} color="secondary" />
            )}
          </Typography>
          <Button
            variant="text"
            className={classes.finishLater}
            onClick={() => setShowRegistration(true)}
          >
            Finish Later
          </Button>
        </Stack>
      </Box>
      {showRegistration && (
        <Box className={classes.accountCreation}>
          <Typography>
            <Link underline="none">Create a free account</Link> or enter your email and we will
            send you this quote w/ your policy number to complete later
          </Typography>
          <Box mt={2}>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              placeholder="youremail@email.com"
            />{' '}
          </Box>
          <Box mt={2}>
            <Button>Submit</Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default HourlyRate;
