import type { FieldComponentProps } from '@/types/field';
import { useCallback, useEffect } from 'react';
import { Checkbox, Stack } from '@mui/material';
import Selection from '@/components/Selection';
import { IconType } from './Icon/icons';

type CheckboxFieldProps = FieldComponentProps<string[]> & {
  options: { label: string; value: string; icon?: IconType }[];
};
const CheckboxField = (props: CheckboxFieldProps) => {
  const { name, options, field, meta, helpers } = props;

  useEffect(() => {
    if (!field.value && meta.initialValue) {
      helpers.setValue(meta.initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback(
    (value, checked) =>
      helpers.setValue(
        checked
          ? Array.from(new Set([...(field.value || []), value]))
          : field.value?.filter((v: string) => v !== value),
        false, // prevents double rerendering but does not validate answer
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [field.value],
  );

  return (
    <>
      <Stack direction="row" spacing={2} className="hideScroll">
        {options?.map(({ icon, label, value }) => (
          <Selection
            key={value}
            controlProps={{
              value,
              checked: field.value?.includes(value),
              component: Checkbox,
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

export default CheckboxField;
