import { api } from "@/libs/api-client";

class ProcedurePageDataApiClient {

  async getProcedurePageDataMain() {
    const response = await api.get('/service-offer/query/page/user/procedure-journey/service-offer-detail/v1/main');
    return response.data;
  }

  async getProcedurePageDataLazy() {
    const response = await api.get('/service-offer/query/page/user/procedure-journey/service-offer-detail/v1/lazy');
    return response.data;
  }
}

export const procedurePageDataApiClient = new ProcedurePageDataApiClient();