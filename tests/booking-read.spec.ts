import { test, expect } from "@playwright/test";
import { BookingApi } from "../api/BookingApi";
import { bookingSchema } from "../types/booking";

test("GET /booking returns a list of bookings", async ({ request }) => {
  const bookingApi = new BookingApi(request);

  const response = await bookingApi.getAll();
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);
});

test("GET /booking/:id returns a specific booking", async ({ request }) => {
  const bookingApi = new BookingApi(request);

  const listResponse = await bookingApi.getAll();
  expect(listResponse.status()).toBe(200);

  const bookings = await listResponse.json();

  const firstId = bookings[0].bookingid;
  const response = await bookingApi.getById(firstId);
  expect(response.status()).toBe(200);

  const booking = bookingSchema.parse(await response.json());
});
