import type { AnySchema } from 'yup';
import { Formik, Form } from 'formik';
import { Box } from '@mui/material';
import Button from '@/components/Button';
import TextField, { PasswordField } from '@/components/TextField';
import { TextFieldProps } from '@/components/TextField';
import { isEmpty } from '@/utils/helper';

const FormWrapper = <T,>({
  fields,
  onSubmit,
  initialValues,
  validationSchema,
  submitLabel = 'Save',
}: {
  initialValues: T;
  submitLabel?: string;
  fields: TextFieldProps[];
  validationSchema?: AnySchema;
  onSubmit: (values: T) => void;
}) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ isSubmitting, errors }) => (
      <Form>
        <>
          {fields.map(field => (
            <Box mb={2} key={field.name}>
              {field.type === 'password' ? (
                <PasswordField size="small" variant="outlined" fullWidth {...field} />
              ) : (
                <TextField type="text" size="small" variant="outlined" fullWidth {...field} />
              )}
            </Box>
          ))}
          <Box textAlign="center" mb={3}>
            <Button
              type="submit"
              color="secondary"
              mx="auto"
              loading={isSubmitting}
              disabled={!isEmpty(errors) || isSubmitting}
            >
              {submitLabel}
            </Button>
          </Box>
        </>
      </Form>
    )}
  </Formik>
);

export default FormWrapper;
