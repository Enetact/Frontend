import { useMemo } from 'react';
import * as Yup from 'yup';
import cx from 'classnames';
import { Box, Divider } from '@mui/material';
import DetailBox from '@/components/DetailBox';
import { SimpleMessage } from '@/components/Message';
import { ENDPOINTS } from '@/utils/constants';
import useMutation from '@/hooks/useMutation';
import classes from './styles.module.scss';
import FormWrapper from '../components/FormWrapper';

const ReportIssue = () => {
  const mutation = useMutation(ENDPOINTS.MESSAGE);
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        message: Yup.string().required().min(50, 'please add a minimum of 50 characters.'),
      }),
    [],
  );
  const handleSubmit = (values: any) => mutation.mutateAsync(values);

  return (
    <Box p={2}>
      <Box mb={2}>
        <Divider />
      </Box>
      <Box mb={3}>
        <DetailBox title="E-mail Address" fullWidth value="youremail@gmail.com" />
      </Box>
      <FormWrapper
        initialValues={{ message: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        fields={[
          {
            type: 'text',
            rows: 5,
            name: 'message',
            multiline: true,
            label: 'Question/Comments',
          },
        ]}
        submitLabel="Submit"
      />
      {!mutation.isLoading && mutation.isSuccess && (
        <SimpleMessage
          color="success"
          icon="check_circle"
          message="We will be in contact with you within 2-3 business days."
        />
      )}
      <Box className={cx(classes.grid, classes.contactWrapper)}>
        <DetailBox
          title={<h4 className={classes.heading}>Contact</h4>}
          value={<Divider light />}
          fullWidth
        />
        <div>
          <Box mb={1}>
            <span className={classes.smallText}>Mobile</span>
            <br />
            (888) 888-8888
          </Box>
          <strong>M-F</strong> 9AM-5PM EST
        </div>
        <div>Feel free to contact us with any questions about your policy.</div>
      </Box>
    </Box>
  );
};

export default ReportIssue;
