import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import Link from '@mui/material/Link';
import ImageCheckBox from '../../../../../common/image-checkbox/ImageCheckBox';
import Pill from '../../../../../common/pill/Pill';

const ProjectSelect: FC = (): JSX.Element => {
  return (
    <div>
      <Box mt={5} mb={5}>
        <Stack>
          <Typography>Project</Typography>
          <Typography variant="caption">
            Select one or multiple categories your project fits in.
          </Typography>
        </Stack>
      </Box>
      <ImageCheckBox
        imageCheckbox={[
          {
            isChecked: true,
            Icons: [HandymanOutlinedIcon],
            label: 'Yard & Outdoor',
          },
          {
            isChecked: false,
            Icons: [HandymanOutlinedIcon],
            label: 'Yard & Outdoor.',
          },
        ]}
      />
      <Box mt={5} mb={5} />
      <Pill
        pills={[
          {
            label: 'Yard & Outdoor',
          },
          {
            label: 'Yard & Outdoor.',
          },
        ]}
      />
      <Box mt={5}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Box>
            <Link href="#" variant="body1" fontSize={14} fontWeight={600} color={'#3D54B8'}>
              What we do + don't cover
            </Link>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default ProjectSelect;
