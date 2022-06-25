import type { FieldHelperProps, FieldInputProps, FieldMetaProps } from 'formik';
import type { FieldComponentProps } from '@/types/field';
import { useMemo, useState } from 'react';
import ClosedField from '@/components/ClosedField';
import InsuredPartiesForm, { InsuredType } from './InsuredPartiesForm';
import { isEmpty } from '@/utils/helper';

enum ClosedAnswer {
  No = 'no',
  Yes = 'yes',
}
const AdditionalInsured = (props: FieldComponentProps<InsuredType[]>) => {
  const { helpers, meta } = props;
  const [hasInsured, setHasInsured] = useState(() =>
    !isEmpty(meta.initialValue) ? ClosedAnswer.Yes : meta.initialValue ? ClosedAnswer.No : '',
  );
  const options = useMemo(
    () => [
      { label: 'No', value: ClosedAnswer.No },
      { label: 'Yes', value: ClosedAnswer.Yes },
    ],
    [],
  );
  const hasInsuredFieldName = 'hasInsured';
  const fieldProps = useMemo(
    () => ({
      field: { value: hasInsured, name: hasInsuredFieldName },
      helpers: {
        setValue: (value: ClosedAnswer) => {
          if (value === ClosedAnswer.No) helpers.setValue([]);
          setHasInsured(value);
        },
      },
    }),
    [hasInsured, hasInsuredFieldName, setHasInsured],
  );

  return (
    <>
      <ClosedField
        meta={{} as FieldMetaProps<any>}
        name={hasInsuredFieldName}
        field={fieldProps.field as FieldInputProps<any>}
        helpers={fieldProps.helpers as FieldHelperProps<any>}
        options={options}
      />
      {hasInsured === ClosedAnswer.Yes && <InsuredPartiesForm {...props} />}
    </>
  );
};

export default AdditionalInsured;
