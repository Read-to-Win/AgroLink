import { apiClient } from "./config";

// getAll advert for user
export const apiFetchAdverts = async () =>
  apiClient.get("/useAdvert/usersviewAlladverts");

// get all advert for vendor
export const apiGetAllAdvertVendor = async () =>
  apiClient.get("/createProduct/adminGetAll");

// add a new Advert
export const apiCreateAdvert = async (payload) =>
  apiClient.post("/createProduct/adminCreate", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// get a Single advert for user
export const apiGetSingleUserAdvert = async (id) =>
  apiClient.get(`/useAdvert/userOnlyViewAdverts/${id}`);

// get a single advert for vendor
export const apiGetSingleVendorAdvert = async (id) =>
  apiClient.get(`/createProduct/viewOneEquipment/${id}`);

// Update single advert
export const apiEditAdvert = async (id, payload) =>
  apiClient.put(`/createProduct/adminUpdate/${id}`, payload);

// delete advert
export const apiDeleteAdvert = async (id) =>
  apiClient.delete(`/createProduct/adminDelete/${id}`);

// get to search for users
export const apiSearchAdvert = async (search) =>
  apiClient.delete(`/useAdvert/userSearchItem/${search}`);
// get to search for admin
export const apiSearchAdminAdvert = async (search) =>
  apiClient.delete(`/useAdvert/userSearchItem/${search}`);
