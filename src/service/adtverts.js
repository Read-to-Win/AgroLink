import { apiClient } from "./config";

// getAll advert for user
export const apiFetchAdverts = async () =>
  apiClient.get("/useAdvert/usersviewAlladverts");

// get all advert for vendor
export const apiGetAllAdvertVendor = async () =>
  apiClient.get("/useAdvert/allAdvertsByVendor");

// add a new Advert
export const apiCreateAdvert = async (payload) =>
  apiClient.post("/useAdvert/vendorAddAdvert", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// get a Single advert for user
export const apiGetSingleUserAdvert = async (id) =>
  apiClient.get(`/useAdvert/userOnlyViewAdverts/${id}`);

// get a single advert for vendor
export const apiGetSingleVendorAdvert = async (id) =>
  apiClient.get(`/useAdvert/vendorAdverts/${id}`);

// Update single advert
export const apiEditAdvert = async (id, payload) =>
  apiClient.put(`/useAdvert/vendorUpdateAdvert/${id}`, payload);

// delete advert
export const apiDeleteAdvert = async (id) =>
  apiClient.delete(`/useAdvert/vendorDeleteAdvert/${id}`);

// get to serach for users
export const apiSearchAdvert = async (search) =>
  apiClient.delete(`/useAdvert/userSearchItem/${search}`);
