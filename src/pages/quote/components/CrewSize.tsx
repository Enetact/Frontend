import type { FieldComponentProps } from '@/types/field';
import LoadingState from '@/components/LoadingState';
import { InfoContent } from '@/components/Message';
import RadioField from '@/components/RadioField';
import useFetcher from '@/hooks/useFetcher';
import { ENDPOINTS } from '@/utils/constants';
import LegendaryQuote from '../LegendaryQuote';

const CrewSize = (props: FieldComponentProps<string>) => {
  // TODO:: add appropriate type here
  const fetcher = useFetcher(ENDPOINTS.CREW_SIZE, undefined, (data: any) =>
    data?.results?.map(({ count, id }: any) => ({
      icon: count === 1 ? 'person' : 'persons',
      label: count === 1 ? 'Just me' : `${count} people`,
      value: `${count}`,
    })),
  );

  return (
    <>
      <LoadingState loading={fetcher.isLoading}>
        <RadioField {...props} options={fetcher.data} />
      </LoadingState>
      <InfoContent>
        <LegendaryQuote state="Fairport, NY" />
      </InfoContent>
    </>
  );
};

export default CrewSize;
