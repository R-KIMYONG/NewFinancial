import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnMount: true,
    },
  },
});

export const QueryClientSetup = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>
  );
};
