import type { FieldComponentProps } from '@/types/field';
import type { Range } from 'react-date-range';
import type { SelectChangeEvent } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';
import { useField } from 'formik';
import { Box, MenuItem, Select, Stack } from '@mui/material';
import useFetcher from '@/hooks/useFetcher';
import { ENDPOINTS } from '@/utils/constants';
import Button from '@/components/Button';
import DateRangePicker from '@/components/DateRangePicker';
import LoadingState from '@/components/LoadingState';
import { Detail } from '@/pages/rate/components/ProjectDetails/ProjectSummary';
import classes from './styles.module.scss';

type DurationDataType = { unit: number; type: string; label: string; value: string };
enum EstimateEnum {
  Hours = 'hours',
  SingleDay = 'singleDay',
  Days = 'days',
}
type EstimateOptionType = { label: string; value: EstimateEnum };
const ProjectDuration = (props: FieldComponentProps<string>) => {
  const { name, accessor } = props;
  const [field, meta, helpers] = useField<{
    estimate: EstimateEnum;
    duration: string;
    startDate: Date;
    endDate: Date;
  }>(name);
  const [options, setOptions] = useState<Record<EstimateEnum, any[]>>();
  const fetcher = useFetcher<DurationDataType[]>(
    `${ENDPOINTS.DURATION}?limit=50`,
    undefined,
    (data: any) =>
      data?.results.map(({ unit, type, code }: any) => ({
        unit,
        type,
        label: `${unit} ${type}`,
        value: code,
      })),
  );
  const estimateOptions = useMemo<EstimateOptionType[]>(
    () => [
      { label: 'Hours', value: EstimateEnum.Hours },
      { label: '1 Day', value: EstimateEnum.SingleDay },
      { label: 'Days', value: EstimateEnum.Days },
    ],
    [],
  );

  useEffect(() => {
    if (!fetcher.isLoading && fetcher.data) {
      const data = fetcher.data || [];
      const opts: Record<any, any> = {};
      opts[EstimateEnum.Hours] = data
        .filter(({ type }: any) => type === 'hour')
        .sort((a, b) => a.unit - b.unit);
      opts[EstimateEnum.Days] = data
        .filter(({ type, unit }: any) => type !== 'hour' && !(type === 'day' && unit === '1'))
        .sort((a, b) => (a.label > b.label ? 1 : -1));
      opts[EstimateEnum.SingleDay] = data.filter(
        ({ type, unit }: any) => type === 'day' && unit === '1',
      );

      setOptions(opts);
    }
  }, [fetcher.isLoading, fetcher.data]);

  const handleValuesChange = (value: Range | Record<string, string>) => {
    helpers.setValue({ ...field.value, ...value });
  };

  const handleEstimateChange = (value: EstimateEnum) => handleValuesChange({ estimate: value });

  const handleDurationChange = (e: SelectChangeEvent) =>
    handleValuesChange({ duration: e.target.value });

  return (
    <LoadingState loading={fetcher.isLoading}>
      <Box>
        <Stack direction="row" justifyContent="center" spacing={2}>
          {estimateOptions.map(({ label, value }) => (
            <Button
              key={value}
              name={`[${accessor}.estimate]`}
              value={value}
              onClick={() => handleEstimateChange(value)}
              variant={field.value?.estimate === value ? 'contained' : 'outlined'}
              className={classes.estimateButton}
            >
              {label}
            </Button>
          ))}
        </Stack>
        {field.value?.estimate && (
          <>
            <Box mt={4} mb={2}>
              <DateRangePicker
                resetTrigger={field.value?.estimate}
                startDatePlaceholder="Start"
                endDatePlaceholder="Finish"
                startDate={meta.initialValue?.startDate}
                endDate={meta.initialValue?.endDate}
                handleRangeChange={handleValuesChange}
                maxDays={
                  [EstimateEnum.Hours, EstimateEnum.SingleDay].includes(field.value?.estimate)
                    ? 1
                    : undefined
                }
              />
            </Box>
            {options && options[field.value?.estimate] && (
              <Detail
                title="Duration"
                value={
                  <Select
                    fullWidth
                    size="small"
                    name={`[${accessor}.duration]`}
                    onChange={handleDurationChange}
                    value={field.value?.duration ?? ''}
                  >
                    {options[field.value?.estimate].map(({ label, value }) => (
                      <MenuItem value={value} key={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                }
              />
            )}
          </>
        )}
      </Box>
    </LoadingState>
  );
};

export default ProjectDuration;
