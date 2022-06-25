import type { TProvider } from '@/types/common';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const FetcherProvider: TProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default FetcherProvider;

// useQuery(['todos', todoId], async () => {
//   const response = await fetch('/todos/' + todoId)
//   if (!response.ok) {
//     throw new Error('Network response was not ok')
//   }
//   return response.json()
// })
