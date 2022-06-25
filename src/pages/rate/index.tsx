import WidgetWrapper from '@/components/WidgetWrapper';
import { coverageConfigs } from './config';
import EstimatedRate from '@/pages/common/EstimatedRate';
import { useAppContext } from '@/context/AppContext';

const RateWidget = ({ onSubmit }: any) => {
  const { quotePayload, setQuotePayload } = useAppContext();

  return (
    <div>
      <EstimatedRate />
      <WidgetWrapper
        initialValues={quotePayload}
        configs={coverageConfigs}
        onSubmit={onSubmit}
        onChange={setQuotePayload}
      />
    </div>
  );
};

export default RateWidget;
