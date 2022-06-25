import type { FieldConfig } from '@/types/field';
import React, { useCallback, useEffect } from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import { Box } from '@mui/material';
import Field from '@/components/Field';
import Button from '@/components/Button';
import Animated, { AnimationType } from '@/components/Animated';
import { getInitialValuesFromConfigs, shouldDisplayField } from '@/components/Field/factory';
import { isEmpty } from '@/utils/helper';

interface OnChangeHandlerProps {
  onChange?: (values: Record<string, any>) => void;
}
const ChangeHandlingForm = ({ onChange }: OnChangeHandlerProps) => {
  const { values }: any = useFormikContext();

  useEffect(() => {
    if (onChange) onChange(values);
  }, [values]);

  return null;
};

type WidgetWrapperProps = {
  configs: FieldConfig[];
  initialValues?: Record<string, any>;
  onSubmit?: (values: Record<string, any>) => void;
  onChange?: (values: Record<string, any>) => void;
  submitButtonProps?: {
    label: string;
    className?: string;
  };
};
const WidgetWrapper = ({
  configs,
  initialValues = {},
  onSubmit,
  onChange,
  submitButtonProps,
}: WidgetWrapperProps) => {
  // const getValidationSchema = validationSchema();
  const computedInitialValues = isEmpty(initialValues)
    ? getInitialValuesFromConfigs(configs)
    : initialValues;

  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      if (onSubmit) onSubmit(values);
    },
    [onSubmit],
  );

  return (
    <Formik
      initialValues={computedInitialValues}
      validationSchema={null}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting }) => {
        const isButtonVisible =
          submitButtonProps && shouldDisplayField(values, configs[configs.length - 1]);

        return (
          <Form>
            {onChange && <ChangeHandlingForm onChange={onChange} />}
            {configs.map(config => {
              return shouldDisplayField(values, config) ? (
                <Field key={config.id} config={config} />
              ) : null;
            })}
            {isButtonVisible && (
              <Animated
                type={AnimationType.FadeIn}
                component={Box}
                display="flex"
                justifyContent="center"
              >
                <Button
                  type="submit"
                  color="secondary"
                  size="large"
                  loading={isSubmitting}
                  {...submitButtonProps}
                >
                  {submitButtonProps?.label}
                </Button>
              </Animated>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default WidgetWrapper;
