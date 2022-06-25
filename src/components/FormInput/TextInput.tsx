import { Field } from 'formik';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { TextInputProps } from '@/types/input';
import classes from './styles.module.scss';

const TextInputComponent = (props: TextInputProps) => {
  const { id, label, field, required, type } = props;
  const { name, value, onChange } = field;

  return (
    <Box>
      <InputLabel htmlFor={props.id} className={classes.formInputLabel}>
        {label}
      </InputLabel>
      <TextField
        id={id}
        fullWidth
        name={name}
        type={type}
        value={value}
        margin="normal"
        required={required}
        onChange={onChange}
        autoComplete={value}
        className={classes.formTextField}
        InputProps={{
          className: classes.formTextFieldInput,
        }}
      />
    </Box>
  );
};

export default function TextInput(props: TextInputProps) {
  return <Field component={TextInputComponent} {...props} />;
}
