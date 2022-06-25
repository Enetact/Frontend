import type { FieldComponentProps } from '@/types/field';
import { useCallback, useEffect } from 'react';
import { Radio, Stack } from '@mui/material';
import Selection from '@/components/Selection';
import { IconType } from './Icon/icons';

type RadioFieldProps = FieldComponentProps<string> & {
  options: { label: string; value: string; icon?: IconType }[];
};
const RadioField = (props: RadioFieldProps) => {
  const { name, options, field, meta, helpers } = props;

  useEffect(() => {
    if (!field.value && meta.initialValue) {
      helpers.setValue(meta.initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback(
    value => helpers.setValue(value, false), // prevents double rerendering but does not validate answer
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [field.value],
  );

  return (
    <>
      <Stack direction="row" spacing={2} className="hideScroll">
        {options?.map(({ icon, label, value }) => (
          <Selection
            {...field}
            key={value}
            controlProps={{
              value,
              checked: field.value === value,
              component: Radio,
            }}
            name={name}
            icon={icon}
            label={label}
            onChange={handleChange}
          />
        ))}
      </Stack>
    </>
  );
};

export default RadioField;
