import useFetcher from '@/hooks/useFetcher';
import { ENDPOINTS } from '@/utils/constants';
import Card from '@/components/Card';
import SelectField from '@/components/SelectField';
import { Stack } from '@mui/material';
import { createLabelValue } from '@/utils/helper';
import { Detail } from '@/pages/rate/components/ProjectDetails/ProjectSummary';

// TODO:: Remove `any` type
const LiabilityLimit = (props: any) => {
  const fetcher = useFetcher(ENDPOINTS.LIMITS, undefined, (data: any) =>
    createLabelValue(data?.results, 'description', 'code'),
  );

  return (
    <Stack direction="column" spacing={4}>
      <Detail
        title="Select liability limit"
        value={<SelectField {...props} options={fetcher.data} />}
      />
      <Card header="What we cover">
        <ul>
          <li>Damage to client’s property</li>
          <li>Client’s medical payments</li>
          <li>Legal fees from lawsuits</li>
        </ul>
      </Card>
      <Card header="Whats not covered">
        <ul>
          <li>
            Your own physical injuries, your property, your car to damaged caused by{' '}
            <strong>excluded activities</strong>
          </li>
        </ul>
      </Card>
    </Stack>
  );
};

export default LiabilityLimit;
