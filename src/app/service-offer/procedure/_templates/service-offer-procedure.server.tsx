import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query";
import { procedurePageDataQueryFactory } from "../_api/queries";
import ServiceOfferProcedureClient from "./service-offer-procedure.client";
import { createQueryClient } from "@/libs/create-query-client";

const ServiceOfferProcedureServer = () => {
  const queryClient = createQueryClient();
  
  queryClient.prefetchQuery(procedurePageDataQueryFactory.getProcedurePageDataMain());
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServiceOfferProcedureClient />
    </HydrationBoundary>
  );
};

export default ServiceOfferProcedureServer;