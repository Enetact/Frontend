import type { FieldConfig } from '@/types/field';
import React from 'react';
import { useField } from 'formik';
import FieldWrapper from './FieldWrapper';

type FieldProps = { config: FieldConfig };
const Field = React.memo(({ config }: FieldProps) => {
  const {
    $cachedConfiguration,
    validationRules,
    component: Component,
    prompt,
    title,
    subtitle,
    defaultProps,
    ...rest
  } = config;
  const [field, meta, helpers] = useField(rest);

  return (
    <FieldWrapper
      prompt={prompt}
      title={title}
      subtitle={subtitle}
      valid={!(meta.error && meta.touched)}
    >
      <Component
        {...field}
        {...rest}
        {...defaultProps}
        value={field.value || ''}
        meta={meta}
        field={field}
        helpers={helpers}
        error={meta.error}
      />
    </FieldWrapper>
  );
});

export default Field;
