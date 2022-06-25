import { Link } from '@mui/material';
import Message, { InfoContent } from '@/components/Message';
import WidgetWrapper from '@/components/WidgetWrapper';
import quoteWidget from './config';
import LegendaryQuote from './LegendaryQuote';
import { useAppContext } from '@/context/AppContext';
import Animated, { AnimationType } from '@/components/Animated';

const QuoteWidget = ({ onSubmit }: any) => {
  const { quotePayload, setQuotePayload } = useAppContext();
  return (
    <div>
      <Message
        messages={[
          <>
            Good news{quotePayload.firstName ? ` ${quotePayload.firstName}` : ''}! We cover{' '}
            <Link href="#" underline="none">
              {quotePayload.state}
            </Link>
          </>,
          'Now lets get you insured',
        ]}
      />
      {/** TODO:: Define common animation types in a file -> e.g fadeIn, scale, etc. */}
      <Animated type={AnimationType.FadeIn} component={InfoContent}>
        <LegendaryQuote state={quotePayload.state} />
      </Animated>
      <WidgetWrapper
        initialValues={quotePayload}
        configs={quoteWidget.configs}
        submitButtonProps={quoteWidget.submitButtonProps}
        onSubmit={onSubmit}
        onChange={setQuotePayload}
      />
    </div>
  );
};

export default QuoteWidget;
