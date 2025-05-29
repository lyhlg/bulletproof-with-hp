import { api } from "@/libs/api-client";

class ProcedurePageDataApiClient {

  async getProcedurePageDataMain() {
    const response = await api.get('/procedure/bff/main');
    return response.data;
  }

  async getProcedurePageDataLazy() {
    const response = await api.get('/procedure/bff/lazy');
    return response.data;
  }
}

export const procedurePageDataApiClient = new ProcedurePageDataApiClient();