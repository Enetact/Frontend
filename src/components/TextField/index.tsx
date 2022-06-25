import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import cx from 'classnames';
import { Box, TextField as BTextField } from '@mui/material';
import { useField } from 'formik';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import classes from './styles.module.scss';

export type { TextFieldProps } from '@mui/material';

const TextField = (props: TextFieldProps & { id?: string }) => {
  const { label, name, id, ...rest } = props;
  const [field, meta] = useField(name!);
  const isError = Boolean(meta.touched && meta.error);
  const htmlId = id ?? name;

  return (
    <div className={classes.textfieldWrapper}>
      {label && (
        <Box className={classes.textfieldLabel}>
          <label htmlFor={htmlId} className={cx({ [classes.hasError]: isError })}>
            {label}
          </label>
        </Box>
      )}
      <Box className={classes.textfieldContainer}>
        <BTextField size="small" id={htmlId} error={isError} {...field} {...rest} />
        <span data-testid={`errorMessage-${htmlId}`} className={classes.errorMessage}>
          {isError ? meta.error : <>&nbsp;</>}
        </span>
      </Box>
    </div>
  );
};

export const PasswordField = (props: Omit<TextFieldProps, 'type'>) => {
  const [show, setShow] = useState(false);

  return (
    <TextField
      {...props}
      type={show ? 'text' : 'password'}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShow(v => !v)}
              edge="end"
            >
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TextField;
