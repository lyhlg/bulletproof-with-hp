import { api } from "@/libs/api-client";

class ServiceOfferFeatureApiClient {

  async sendLogs() {
    const response = await api.post('/service-offer/logs');
    return response.data;
  }

  async sendLike() {
    const response = await api.post('/service-offer/like');
    return response.data;
  }
}

export const serviceOfferFeatureApiClient = new ServiceOfferFeatureApiClient();