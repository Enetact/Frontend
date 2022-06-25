import type { FieldComponentProps } from '@/types/field';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

const AddressField = (props: FieldComponentProps<string>) => {
  const { name, meta, onBlur, helpers } = props;
  const [value, setValue] = useState(meta?.initialValue || '');

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      helpers.setValue(value);
    }, 2000); // delay 2s before committing value to state
    return () => clearTimeout(timeOutId);
  }, [value]);

  return (
    <TextField
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={e => setValue(e.target.value)}
      fullWidth
      multiline
      rows={6}
      inputProps={{
        sx: {
          minHeight: '100px !important',
          maxHeight: '200px !important',
          fontWeight: 700,
          fontSize: 32,
          lineHeight: 1,
          color: '#838791',
        },
      }}
    />
  );
};

export default AddressField;
