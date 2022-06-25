import * as React from 'react';
import { FC } from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', top: -2 }}>
      <Box sx={{ width: '100%' }}>
        <LinearProgress color="secondary" variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

export type Level = 'Quote' | 'Coverage' | 'Rate' | 'Certificate';

interface ProgressParam {
  level: Level;
}

const Progress: FC<ProgressParam> = ({ level }): JSX.Element => {
  const progressLevel = {
    Quote: 25,
    Coverage: 51,
    Rate: 80,
    Certificate: 100,
  };

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progressLevel[level]} />
    </Box>
  );
};

export default Progress;
