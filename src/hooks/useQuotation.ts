import { UseQueryResult } from 'react-query';
import { useAppContext } from '@/context/AppContext';
import { ENDPOINTS } from '@/utils/constants';
import useFetcher from './useFetcher';
import { getDateOnly, nested } from '@/utils/helper';
import { Method } from '@/utils/api';

// TODO:: add appropriate type here
const transformPayload = (p: any) => {
  const defaultObj = {} as Record<string, any>;
  const {
    zipCode,
    stateCode,
    quote: {
      address,
      insuredParties,
      waiverOfSubrogation,
      crewSize: crewSizeCode,
      projectCategories: categoryCodes = [],
      projectDuration: { duration: jobDurationCode, endDate, startDate } = defaultObj,
    } = defaultObj,
    coverage: { businessLiabilityLimit: limitCode } = defaultObj,
  } = nested(p);

  return {
    address,
    zipCode,
    limitCode,
    stateCode,
    crewSizeCode,
    categoryCodes,
    jobDurationCode,
    waiverOfSubrogation: waiverOfSubrogation === 'yes' ? '1' : '0', // TODO:: update this from input source
    additionalInsuredCoverage: insuredParties === 'yes' ? '1' : '0',
    endDate: getDateOnly(endDate),
    startDate: getDateOnly(startDate),
  };
};

type Quotation = {
  rate: number;
  hourlyRate: number;
};
export default function useQuotation(): UseQueryResult<Quotation, any> {
  const { quotePayload } = useAppContext();

  return useFetcher(
    ENDPOINTS.ESTIMATED_QUOTATION,
    {
      method: Method.Post,
      qid: [quotePayload],
      body: transformPayload(quotePayload),
    },
    (data: any) => data?.result,
  );
}
