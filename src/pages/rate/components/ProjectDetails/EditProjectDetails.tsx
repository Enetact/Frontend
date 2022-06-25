import type { FieldComponentProps } from '@/types/field';
import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import { Detail } from './ProjectSummary';
import classes from './styles.module.scss';
import ProjectCategories from '@/pages/quote/components/ProjectCategories';
import LiabilityLimit from '@/pages/coverage/components/LiabilityLimit';
import InsuredPartiesForm from '@/pages/quote/components/AdditionalInsured/InsuredPartiesForm';
import RadioField from '@/components/RadioField';
import ProjectDuration from '@/pages/quote/components/ProjectDuration';
import { ENDPOINTS } from '@/utils/constants';
import useFetcher from '@/hooks/useFetcher';

// TODO:: refactor code (avoid duplication).
const CrewSize = (props: any) => {
  const fetcher = useFetcher(ENDPOINTS.CREW_SIZE, undefined, (data: any) =>
    data?.results?.map(({ count, id }: any) => ({
      icon: count === 1 ? 'person' : 'persons',
      label: count === 1 ? 'Just me' : `${count} people`,
      value: `${count}`,
    })),
  );

  return <RadioField {...props} options={fetcher.data} />;
};

const EditProjectDetails = () => {
  const context = useFormikContext();
  const { getFieldProps, getFieldMeta, getFieldHelpers, initialValues = {} } = context;

  const getProps = (name: string): FieldComponentProps<any> | any => {
    const field = getFieldProps(name);
    const meta = getFieldMeta(name);
    meta.initialValue = meta.initialValue ?? (initialValues as any)[name];
    const helpers = getFieldHelpers(name);
    return {
      ...field,
      name: `['${name}']`,
      id: name,
      accessor: name,
      field,
      defaultValue: meta.initialValue,
      meta,
      helpers,
    };
  };

  return (
    <>
      <div className={classes.projectDetails}>
        <Detail
          title="First name"
          value={
            <TextField type="text" size="small" variant="outlined" {...getProps('firstName')} />
          }
        />
        <Detail
          title="Last name"
          value={
            <TextField type="text" size="small" variant="outlined" {...getProps('lastName')} />
          }
        />
        <Detail
          title="DBA"
          fullWidth
          value={<TextField type="text" size="small" fullWidth {...getProps('quote.dba')} />}
        />
        <Detail
          fullWidth
          title="Project Address"
          value={
            <TextField type="text" size="small" fullWidth {...getProps('quote.address')} />
          }
        />
        <Detail
          title="Project Category"
          value={<ProjectCategories {...getProps('quote.projectCategories')} />}
          fullWidth
        />
        <Detail
          title="Business Liability"
          value={<LiabilityLimit {...getProps('coverage.businessLiabilityLimit')} />}
          fullWidth
        />
        <Detail
          fullWidth
          title="Crew Size"
          value={<CrewSize {...getProps('quote.crewSize')} />}
        />
        <Detail
          fullWidth
          title="Additionally Insured"
          value={<InsuredPartiesForm {...getProps('quote.insuredParties')} />}
        />
        <Detail
          fullWidth
          title="Project duration"
          value={<ProjectDuration {...getProps('quote.projectDuration')} />}
        />
      </div>
    </>
  );
};

export default EditProjectDetails;
