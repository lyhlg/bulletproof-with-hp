import { queryOptions } from "@tanstack/react-query";
import { procedurePageDataApiClient } from "./procedure-page-api-client";

const queryKeys = {
};

export const procedurePageDataQueryFactory = {
  getProcedurePageDataMain: () => queryOptions({
    queryKey: ['procedurePageData', 'main'],
    queryFn: procedurePageDataApiClient.getProcedurePageDataMain,
  }),
  getProcedurePageDataLazy: () => ({
    queryKey: ['procedurePageData', 'lazy'],
    queryFn: procedurePageDataApiClient.getProcedurePageDataLazy,
  }),

  // Partially fetched data
};

export default queryKeys;