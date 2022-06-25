import useQuotation from '@/hooks/useQuotation';
import { toUSD } from '@/utils/currency';
import { Box, Stack, Typography } from '@mui/material';
import LoadingState from '../../../components/LoadingState';

const EstimatedRate = () => {
  const quotation = useQuotation();
  const hourlyRate = Math.round(quotation.data?.hourlyRate || 0);

  return (
    <>
      <Box mt={5} mb={5}>
        <LoadingState height={10} loading={!quotation?.data && quotation.isLoading}>
          <Stack direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography fontWeight={'400'} fontSize={16} color={'#273576'}>
              YOUR ESTIMATED RATE
            </Typography>
            <Stack direction={'row'}>
              <Typography fontSize={35.63}>$</Typography>
              <Typography
                fontSize={104.67}
                lineHeight={0.9}
                color={'#273576'}
                fontWeight={'700'}
              >
                {hourlyRate}
              </Typography>
              <Stack direction={'column'}>
                <Typography fontSize={29.67}>per hour</Typography>
                <Typography fontSize={19.78} color={'#E86825'} fontWeight={500}>
                  {toUSD(quotation.data?.rate || '')} total
                </Typography>
                <Typography fontSize={9}>TAXES NOT INCLUDED</Typography>
              </Stack>
            </Stack>
          </Stack>
        </LoadingState>
      </Box>
    </>
  );
};

export default EstimatedRate;
