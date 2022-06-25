import AuthWrapper from '@/components/AuthWrapper';
import TextInput from '@/components/FormInput/TextInput';
import { PageLink } from '@/types/common';
import { Link } from 'react-router-dom';
import { RETRIEVE_QUOTE_PATH, SIGNUP_PATH } from '@/utils/paths';

export default function RetrieveQuote() {
  const links: PageLink[] = [
    {
      title: 'Retrieve Quote',
      to: RETRIEVE_QUOTE_PATH,
      isActive: true,
    },
  ];

  const handleSubmit = (values: Record<string, any>) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const initialValues = { email: '', quote: '' };

  return (
    <AuthWrapper
      initialValues={initialValues}
      links={links}
      onSubmit={handleSubmit}
      submitButtonLabel="Retrieve Quote"
      description={
        <>
          Enter in your policy number to retrieve your past quotes, or{' '}
          <Link to={SIGNUP_PATH}>create an account</Link> to save your past quotes.
        </>
      }
    >
      <>
        <TextInput id="email" label="Email" name="email" type="email" required />
        <TextInput id="quote" label="Quote #" name="quote" required />
      </>
    </AuthWrapper>
  );
}
