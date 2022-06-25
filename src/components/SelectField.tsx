import type { FieldComponentProps } from '@/types/field';
import { useCallback, useEffect } from 'react';
import { useField } from 'formik';
import { FormControl, MenuItem, Select, Stack, InputLabel } from '@mui/material';

type SelectFieldProps = Partial<FieldComponentProps<string>> & {
  name: string;
  options: { label: string; value: string }[];
};
const SelectField = (props: SelectFieldProps) => {
  const { name, options, label } = props;
  const [field, meta, helpers] = useField(name);

  useEffect(() => {
    if (!field.value && meta?.initialValue) {
      helpers?.setValue(meta.initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback(
    e => helpers?.setValue(e.target.value, false), // prevents double rerendering but does not validate answer
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [field.value],
  );

  return (
    <>
      <Stack direction="row" spacing={2} className="hideScroll">
        <FormControl fullWidth>
          {label && <InputLabel>{label}</InputLabel>}
          <Select
            size="small"
            label={label}
            name={name}
            onChange={handleChange}
            value={field.value ?? ''}
          >
            {options?.map(({ label, value }) => (
              <MenuItem value={value} key={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </>
  );
};

export default SelectField;
