import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import Accordion from '@/components/Accordion';
import classes from './styles.module.scss';
import CoverDisplayCard from '../components/CoverDisplayCard';

export type JobCategoriesType = {
  id?: string;
  label: string;
  value: string;
  excludedCoverages?: Array<string>;
  includedCoverages?: Array<string>;
}[];

type CoveredOrNotProps = {
  trigger?: string | JSX.Element;
  items?: JobCategoriesType;
};
const CoveredOrNot = ({ trigger, items = [] }: CoveredOrNotProps) => {
  const [coverOpen, setCoverOpen] = useState(false);

  return (
    <Stack direction="column" spacing={2} mt={3}>
      <Box className={classes.titleContainer}>
        <span onClick={() => setCoverOpen(v => !v)}>
          {trigger || <span className={classes.triggerTitle}>What we do + don't cover</span>}
        </span>
      </Box>
      {coverOpen && (
        <Accordion
          items={items?.map(({ label, value, excludedCoverages, includedCoverages }) => ({
            id: value,
            summary: label,
            details: (
              <Stack direction="column">
                <Box className={classes.detailHeader}>
                  <CoverDisplayCard title={"What's covered"} items={includedCoverages} />
                  <CoverDisplayCard
                    title={"What's not covered"}
                    secondary={true}
                    items={excludedCoverages}
                  />
                </Box>
              </Stack>
            ),
          }))}
        />
      )}
    </Stack>
  );
};

export default CoveredOrNot;
