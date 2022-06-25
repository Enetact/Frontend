import { InfoContent } from '@/components/Message';
import WidgetWrapper from '@/components/WidgetWrapper';
import { coverageConfigs } from './config';
import EstimatedRate from '@/pages/common/EstimatedRate';
import LegendaryQuote from '@/pages/quote/LegendaryQuote';
import { useAppContext } from '@/context/AppContext';

const CoverageWidget = ({ onSubmit }: any) => {
  const { quotePayload, setQuotePayload } = useAppContext();

  return (
    <div>
      <EstimatedRate />
      <InfoContent>
        <LegendaryQuote state="Iowa" />
      </InfoContent>
      <WidgetWrapper
        initialValues={quotePayload}
        configs={coverageConfigs}
        submitButtonProps={{ label: 'Next' }}
        onSubmit={onSubmit}
        onChange={setQuotePayload}
      />
    </div>
  );
};

export default CoverageWidget;
