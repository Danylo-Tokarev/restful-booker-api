import { APIRequestContext, APIResponse } from "@playwright/test";

export class BookingApi {
  constructor(private readonly request: APIRequestContext) {}

  async getAll(): Promise<APIResponse> {
    return this.request.get("/booking");
  }

  async getById(id: number): Promise<APIResponse> {
    return this.request.get(`/booking/${id}`);
  }
}
