import type { SyntheticEvent } from 'react';
import { useCallback } from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';

type AttestationProps = {
  name: string;
  label: string;
} & any;
const Attestation = (props: AttestationProps) => {
  const { name, label, field, helpers, meta } = props;

  const handleChange = useCallback(
    (_e: SyntheticEvent<Element, Event>, checked: boolean) => helpers.setValue(!!checked),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [field.value],
  );

  return (
    <Box>
      <FormControlLabel
        name={name}
        control={<Checkbox defaultChecked={meta.initialValue} />}
        label={label}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Attestation;
