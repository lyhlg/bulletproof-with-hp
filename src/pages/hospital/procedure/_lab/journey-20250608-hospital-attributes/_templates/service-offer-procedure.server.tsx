import { useQuery } from "@tanstack/react-query";
import { procedurePageDataQueryFactory } from "../_api/queries";
import ServiceOfferProcedureClient from "./service-offer-procedure.client";

const ServiceOfferProcedureServer = () => {
  const { data } = useQuery(procedurePageDataQueryFactory.getProcedurePageDataMain());
  return <ServiceOfferProcedureClient data={data} />
};

export default ServiceOfferProcedureServer;