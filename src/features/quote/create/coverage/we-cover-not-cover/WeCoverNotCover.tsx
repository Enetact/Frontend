import React, { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';

export type TYPES = 'COVERED' | 'NOT_COVERED';

interface CoverageGuide {
  title: string;
  type: TYPES;
  coverages: string[];
}

const WeCoverNotCover: FC<CoverageGuide> = ({ title, type, coverages }): JSX.Element => {
  return (
    <>
      <Box>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
          <Box
            mt={2}
            mb={2}
            sx={{
              paddingX: 5,
              paddingY: 5,
              maxWidth: { xs: 400, sm: 650, md: 770 },
              width: 800,
              backgroundColor: 'primary.white',
              borderRadius: 2,
              boxShadow: '0px 6px 20px -2px rgba(18, 110, 255, 0.14), 0px 4px 6px #E3E8FF;',
              alignContent: 'center',
            }}
          >
            <Typography color={type === 'COVERED' ? '#273576' : '#E86825'} fontWeight={600}>
              {title}
            </Typography>
            <Typography fontSize={16}>
              <ul>
                {coverages.map((coverage, index) => (
                  <li key={index}>{coverage}</li>
                ))}
              </ul>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default WeCoverNotCover;
