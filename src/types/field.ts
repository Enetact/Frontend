import type { FieldHelperProps, FieldInputProps, FieldMetaProps } from 'formik';

export type FormState = Record<string, unknown>;

type ComponentProps<T> = {
  meta: FieldMetaProps<T | undefined>;
  field: FieldInputProps<T | undefined>;
  helpers: FieldHelperProps<T | undefined>;
  error?: string;
  valid?: boolean;
} & Partial<FieldInputProps<T | undefined>>;

export type Configuration<T = any> = {
  name: string;
  component: (props: FieldComponentProps<T>) => JSX.Element | null;
  id?: string;
  title?: string;
  subtitle?: string;
  prompt?: string | string[];
  defaultProps?: Record<string, any>;
  shouldDisplayAfterValid?: string[];
  shouldDisplay?: (state: FormState) => boolean;
  shouldValidate?: (value: any) => string | undefined;
  getFieldId?: (state: FormState) => string;
  getFieldValue?: (state: FormState) => any;
  isActive?: (state: FormState) => boolean;
  nextFieldId?: (fieldId: string) => string;
};

export type FieldConfig = Configuration & {
  _name: string;
  accessor: string;
  validationRules: any;
  $cachedConfiguration: {
    groupId: string;
    getValidationRules: any;
    configuration: Configuration;
  };
};

export type CreateFieldFactory = (
  groupId: string,
  getValidationRules: any,
) => (configuration: Configuration) => FieldConfig;

export type FieldComponentProps<T> = Omit<Configuration, 'component'> &
  ComponentProps<T> &
  Configuration['defaultProps'];
