import type { FieldComponentProps } from '@/types/field';
import { useCallback } from 'react';
import { Stack } from '@mui/material';
import Button from '@/components/Button';

type ClosedFieldProps = FieldComponentProps<string> & {
  options?: { label: string; value: string }[];
};
const ClosedField = (props: ClosedFieldProps) => {
  const { name, options, field, helpers } = props;

  const handleChange = useCallback(
    value => helpers.setValue(value, false), // prevents double rerendering but does not validate answer
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [field.value],
  );

  return (
    <>
      <Stack direction="column" alignItems="center" spacing={2}>
        {options?.map(({ label, value }) => (
          <Button
            key={value}
            name={name}
            value={value}
            onClick={() => handleChange(value)}
            variant={field.value === value ? 'contained' : 'outlined'}
          >
            {label}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default ClosedField;
