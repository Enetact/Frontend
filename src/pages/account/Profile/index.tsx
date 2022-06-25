import * as Yup from 'yup';
import { useEffect, useMemo, useState } from 'react';
import { Box, Divider } from '@mui/material';
import DetailBox from '@/components/DetailBox';
import { SimpleMessage } from '@/components/Message';
import { ENDPOINTS } from '@/utils/constants';
import classes from './styles.module.scss';
import FormWrapper from '../components/FormWrapper';
import useMutation from '@/hooks/useMutation';
import { Method } from '@/utils/api';
import { useAuthContext } from '@/context/AuthContext';

const SectionHeading = ({
  title,
  onChangeMode,
}: {
  title: string;
  onChangeMode?: () => void;
}) => (
  <DetailBox
    dataTestId="profileSection"
    title={
      <Box display="flex" justifyContent="space-between">
        <h4 className={classes.heading} data-testid="profileSection-heading">
          {title}
        </h4>
        {onChangeMode && (
          <span className={classes.editButton} onClick={onChangeMode}>
            Edit
          </span>
        )}
      </Box>
    }
    value={<Divider light />}
    fullWidth
  />
);

enum EditMode {
  Email = 'email',
  General = 'general',
}
const NamesSection = ({ editMode, setEditMode }: any) => {
  const user = useAuthContext().user!;
  const mutation = useMutation(`${ENDPOINTS.USERS}/${user?.id}`, {
    method: Method.Put,
  });
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        firstName: Yup.string().min(2, 'first name is too short!').required(),
        lastName: Yup.string().min(2, 'last name is too short!').required(),
      }),
    [],
  );
  const isEditing = editMode === EditMode.General;

  useEffect(() => {
    if (!mutation.isLoading) {
      if (mutation.isSuccess) setEditMode(null);
    }
  }, [mutation, setEditMode]);

  const handleSubmit = (values: any) => mutation.mutateAsync(values);

  return (
    <Box mb={4}>
      <SectionHeading title="Name" onChangeMode={() => setEditMode(EditMode.General)} />
      {!isEditing && (
        <>
          <Box mb={2}>
            <DetailBox title="First Name" value={user?.firstName} />
          </Box>
          <Box mb={2}>
            <DetailBox title="Last Name" value={user?.lastName} />
          </Box>
        </>
      )}
      {isEditing && (
        <FormWrapper
          initialValues={{
            firstName: user?.firstName,
            lastName: user?.lastName,
          }}
          onSubmit={handleSubmit}
          fields={[
            { name: 'firstName', label: 'First Name' },
            { name: 'lastName', label: 'Last Name' },
          ]}
          validationSchema={validationSchema}
        />
      )}
    </Box>
  );
};

const EmailSection = ({ editMode, setEditMode }: any) => {
  const user = useAuthContext().user!;
  const mutation = useMutation(`${ENDPOINTS.USERS}/${user?.id}/email`, {
    method: Method.Put,
  });
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string().email('please use a valid email').required(),
        password: Yup.string().required(),
      }),
    [],
  );
  const isEditing = editMode === EditMode.Email;

  useEffect(() => {
    if (!mutation.isLoading && mutation.isSuccess) setEditMode(null);
  }, [mutation.isLoading, mutation.isSuccess, setEditMode]);

  const handleSubmit = (values: any) => mutation.mutateAsync(values);

  return (
    <Box mb={4}>
      <SectionHeading title="E-mail" onChangeMode={() => setEditMode(EditMode.Email)} />
      <Box mb={2}>
        <DetailBox
          title={isEditing ? 'Current E-mail Address' : 'E-mail Address'}
          value={user?.email}
        />
      </Box>
      {isEditing && (
        <FormWrapper
          initialValues={{
            email: user?.email,
            password: '',
          }}
          onSubmit={handleSubmit}
          fields={[
            { name: 'email', type: 'email', label: 'New E-mail Address' },
            { name: 'password', type: 'password', label: 'Current Password' },
          ]}
          validationSchema={validationSchema}
        />
      )}
      {!mutation.isLoading && mutation.isSuccess && (
        <SimpleMessage
          color="success"
          icon="check_circle"
          message="Your e-mail address has been successfully updated."
        />
      )}
    </Box>
  );
};

const PasswordSection = () => {
  const user = useAuthContext().user!;
  const mutation = useMutation(`${ENDPOINTS.USERS}/${user?.id}/password`, {
    method: Method.Put,
  });
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        currentPassword: Yup.string().required(),
        // TODO:: move this business rule for password into domain file.
        newPassword: Yup.string()
          .required()
          .min(10, 'Password should be minimum 10 characters in length.')
          .notOneOf([Yup.ref('currentPassword')], 'You cannot use your previous password.')
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
            'Your password must contain a symbol, number, upper case and lower case.',
          )
          .test(
            'is-not-email',
            'You cannot use your email address as your password.',
            value => value?.toLowerCase() !== user?.email.toLowerCase(),
          ),
      }),
    [],
  );

  const handleSubmit = (values: any) => mutation.mutateAsync(values);

  return (
    <Box mb={4}>
      <SectionHeading title="Change Password" />
      <FormWrapper
        initialValues={{
          currentPassword: '',
          newPassword: '',
        }}
        onSubmit={handleSubmit}
        fields={[
          { name: 'currentPassword', type: 'password', label: 'Current Password' },
          { name: 'newPassword', type: 'password', label: 'New Password' },
        ]}
        validationSchema={validationSchema}
      />
      {!mutation.isLoading && mutation.isSuccess && (
        <SimpleMessage
          color="success"
          icon="check_circle"
          message="Your password been successfully updated."
        />
      )}
    </Box>
  );
};

const Profile = () => {
  const [editMode, setEditMode] = useState<EditMode | null>(null);

  return (
    <Box p={2}>
      <NamesSection editMode={editMode} setEditMode={setEditMode} />
      <EmailSection editMode={editMode} setEditMode={setEditMode} />
      <PasswordSection />
    </Box>
  );
};

export default Profile;
