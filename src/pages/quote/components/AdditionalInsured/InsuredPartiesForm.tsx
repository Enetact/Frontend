import type { FieldComponentProps } from '@/types/field';
import { useEffect, useState, useCallback } from 'react';
import { Box, Stack, TextField } from '@mui/material';
import Button from '@/components/Button';
import classes from './styles.module.scss';

export type InsuredType = {
  id: number;
  name?: string;
  address?: string;
};
type InsuredFormProps = InsuredType & {
  onDelete: (id: number) => void;
  onChange: (id: number, s: { name: string; address: string }) => void;
};
const InsuredForm = ({ id, name = '', address = '', onDelete, onChange }: InsuredFormProps) => {
  const [state, setState] = useState({ id, name, address });
  const handleDelete = useCallback(() => {
    onDelete(state.id);
  }, [onDelete, state.id]);

  const handleChange = useCallback(
    (key: string, value: string) => {
      setState(s => {
        const newState = { ...s, [key]: value };
        onChange(state.id, newState);
        return newState;
      });
    },
    [onChange, state.id],
  );

  return (
    <Box mt={3} mb={3}>
      <Stack direction="column" spacing={2}>
        <TextField
          label="Full Name"
          defaultValue={name}
          onChange={e => handleChange('name', e.target.value)}
        />
        <TextField
          label="Address"
          defaultValue={address}
          onChange={e => handleChange('address', e.target.value)}
        />
        <Box className={classes.deleteInsured}>
          <span onClick={handleDelete}>Delete</span>
        </Box>
      </Stack>
    </Box>
  );
};

const InsuredPartiesForm = (props: FieldComponentProps<InsuredType[]>) => {
  const { field, helpers, meta } = props;
  const [insured, setInsured] = useState<InsuredType[]>(
    field.value ?? meta.initialValue ?? [{ id: Date.now(), name: '', address: '' }],
  );

  useEffect(() => {
    if (meta.initialValue) helpers.setValue(meta.initialValue);
  }, []);

  const addInsured = () => {
    setInsured(i => [...i, { id: Date.now(), name: '', address: '' }]);
  };

  const deleteInsured = useCallback(id => {
    setInsured(i => i.filter(x => x.id !== id));
  }, []);

  const updateInsured = useCallback((id, data) => {
    setInsured(i => {
      const idx = i.findIndex(x => x.id === id);
      if (idx >= 0) i[idx] = { ...i[idx], ...data };
      return i;
    });
  }, []);

  const handleSetAdditionalParties = () => {
    helpers.setValue(insured);
  };

  return (
    <fieldset name={field.name} className={classes.formWrapper}>
      {insured?.map(({ id, name, address }) => (
        <InsuredForm
          id={id}
          key={id}
          name={name}
          address={address}
          onDelete={deleteInsured}
          onChange={updateInsured}
        />
      ))}
      <Box className={classes.addInsured}>
        <span onClick={addInsured}>+ Add</span>
      </Box>
      <Box className={classes.continueButtonWrapper}>
        <Button
          color="secondary"
          size="large"
          onClick={handleSetAdditionalParties}
          disabled={insured.length === 0}
        >
          Continue
        </Button>
      </Box>
    </fieldset>
  );
};

export default InsuredPartiesForm;
