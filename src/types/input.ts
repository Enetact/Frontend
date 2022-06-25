type CommonInputProp = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<any>) => void;
} & any;

export type TextInputProps = CommonInputProp & {
  value?: string;
  type?: 'text' | 'email' | 'number' | 'password';
};

export type CheckboxInputProps = CommonInputProp & {
  checked?: boolean;
};
