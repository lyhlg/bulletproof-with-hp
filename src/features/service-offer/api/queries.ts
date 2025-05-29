import { queryOptions } from "@tanstack/react-query";
import { serviceOfferFeatureApiClient } from "./service-offer-feature-api-client";

const queryKeys = {
};

export const serviceOfferFeatureQueryFactory = {
  sendLogs: () => queryOptions({
    queryKey: ['serviceOfferFeature', 'sendLogs'],
    queryFn: serviceOfferFeatureApiClient.sendLogs,
  }),
  sendLike: () => ({
    queryKey: ['procedurePageData', 'lazy'],
    queryFn: serviceOfferFeatureApiClient.sendLike,
  }),
};

export default queryKeys;