import { useState } from 'react';
import { Field } from 'formik';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextInputProps } from '@/types/input';
import classes from './styles.module.scss';

const PasswordInputComponent = (props: TextInputProps) => {
  const { id, label, field, required } = props;
  const { name, value, onChange } = field;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(p => !p);
  };

  return (
    <Box>
      <InputLabel htmlFor={id} className={classes.formInputLabel}>
        {label}
      </InputLabel>
      <TextField
        margin="normal"
        required={required}
        fullWidth
        id={id}
        type={showPassword ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        className={classes.formTextField}
        InputProps={{
          className: classes.formTextFieldInput,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default function PasswordInput(props: TextInputProps) {
  return <Field component={PasswordInputComponent} {...props} />;
}
