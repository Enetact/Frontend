import { Field } from 'formik';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { CheckboxInputProps } from '@/types/input';

const CheckboxInputComponent = (props: CheckboxInputProps) => {
  const { id, label, field, required } = props;
  const { name, checked, onChange } = field;

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            name={name}
            checked={checked}
            required={required}
            onChange={onChange}
          />
        }
        label={<Typography variant="caption">{label}</Typography>}
      />
    </FormGroup>
  );
};

export default function CheckboxInput(props: CheckboxInputProps) {
  return <Field component={CheckboxInputComponent} {...props} />;
}
