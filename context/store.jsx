import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const state = { hello: "hello" }
const queryClient = new QueryClient(state)


export const Store = ({ children }) => {

  return (
    <QueryClientProvider client={ queryClient }>
      { children }
      <ReactQueryDevtools initialIsOpen={ false } />
    </QueryClientProvider>
  );
}
