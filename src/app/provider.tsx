'use client'

import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "@/libs/create-query-client";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = createQueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Provider;