import cx from 'classnames';
import { Box } from '@mui/material';
import { useAppContext } from '@/context/AppContext';
import Chip from '@/components/Chip';
import classes from './styles.module.scss';
import { ENDPOINTS } from '@/utils/constants';
import useFetcher from '@/hooks/useFetcher';
import { createLabelValue, getDateOnly } from '@/utils/helper';
import { useMemo } from 'react';

type DetailType = {
  title: string | JSX.Element;
  value: string | JSX.Element | null;
  fullWidth?: boolean;
};
export const Detail = ({ title, value, fullWidth }: DetailType) => (
  <div className={cx(classes.detail, { [classes.fullWidth]: fullWidth })}>
    <Box className={classes.detailTitle}>{title}</Box>
    <Box className={classes.detailValue}>{value ?? '-'}</Box>
  </div>
);

const ProjectCategories = ({ items }: { items: string[] }) => {
  // TODO:: refactor code (avoid duplication).
  const fetcher = useFetcher<{ label: string; value: string }[]>(
    ENDPOINTS.JOB_CATEGORIES,
    undefined,
    (data: any) => createLabelValue(data?.results, 'name', 'code'),
  );

  const createValueOptionMap = useMemo(
    () =>
      items && fetcher.data
        ? fetcher.data?.filter(option => items?.includes(option.value))
        : [],
    [items, fetcher.data],
  );

  return (
    <div>
      {createValueOptionMap.map(({ label, value }) => (
        <Chip key={value} value={value} label={label} />
      ))}
    </div>
  );
};

const AdditionalInsured = ({ items = [] }: { items: any[] }) => (
  <>
    {items?.map(item => (
      <div key={item}>{item.name}</div>
    ))}
  </>
);

const ProjectSummary = () => {
  const { quotePayload } = useAppContext();
  const {
    firstName,
    lastName,
    'quote.crewSize': crewSize,
    'quote.address': address,
    'quote.dba': dba,
    'quote.projectCategories': categories,
    'coverage.businessLiabilityLimit': limit,
    'quote.insuredParties': insuredParties,
    'quote.projectDuration': projectDuration,
  } = quotePayload;

  return (
    <div className={classes.projectDetails}>
      <Detail title="First name" value={firstName} />
      <Detail title="Last name" value={lastName} />
      <Detail title="DBA" value={dba} />
      <Detail title="Project Address" value={address} />
      <Detail
        title="Project Category"
        value={categories?.length > 0 ? <ProjectCategories items={categories} /> : null}
        fullWidth
      />
      <Detail title="Business Liability" value={limit} />
      <Detail title="Crew Size" value={crewSize} />
      <Detail title="Additional Insured?" value={insuredParties?.length > 0 ? 'Yes' : 'No'} />
      <Detail
        title="Additional Parties"
        value={insuredParties?.length > 0 ? <AdditionalInsured items={insuredParties} /> : null}
      />
      <Detail title="Starts" value={getDateOnly(projectDuration?.startDate) || ''} />
      <Detail title="Ends" value={getDateOnly(projectDuration?.endDate) || ''} />
    </div>
  );
};

export default ProjectSummary;
