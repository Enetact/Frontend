import type { FieldComponentProps } from '@/types/field';
import type { JobCategoriesType } from '@/pages/common/CoveredOrNot';
import { useMemo } from 'react';
import { Box, Divider } from '@mui/material';
import CheckboxField from '@/components/CheckboxField';
import Chip from '@/components/Chip';
import useFetcher from '@/hooks/useFetcher';
import { ENDPOINTS } from '@/utils/constants';
import LoadingState from '@/components/LoadingState';
import CoveredOrNot from '@/pages/common/CoveredOrNot';

const ProjectCategories = (props: FieldComponentProps<string[]>) => {
  const { field, helpers } = props;
  const fetcher = useFetcher<JobCategoriesType>(
    ENDPOINTS.JOB_CATEGORIES,
    undefined,
    (data: any) =>
      data?.results.map((item: Record<string, unknown>) => ({
        id: item.id,
        label: item.name,
        value: item.code,
        excludedCoverages: item.excludedCoverages,
        includedCoverages: item.includedCoverages,
      })),
  );

  const createValueOptionMap = useMemo(
    () =>
      field.value && fetcher.data
        ? fetcher.data?.filter(option => field.value?.includes(option.value))
        : [],
    [field.value, fetcher.data],
  );

  return (
    <LoadingState loading={fetcher.isLoading}>
      <>
        <CheckboxField {...props} options={fetcher.data!} />
        {createValueOptionMap.length > 0 && (
          <>
            <Box my={1}>
              <Divider light />
            </Box>
            <Box>
              {createValueOptionMap.map(({ label, value }: any) => (
                <Chip
                  key={value}
                  value={value}
                  label={label}
                  onDelete={(value: string) => {
                    helpers.setValue(field.value?.filter((v: string) => v !== value));
                  }}
                />
              ))}
            </Box>
            <CoveredOrNot items={createValueOptionMap} />
          </>
        )}
      </>
    </LoadingState>
  );
};

export default ProjectCategories;
