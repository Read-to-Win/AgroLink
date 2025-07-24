import { apiClient } from "./config";

export const apiLogin = async (payload) => apiClient.post("/api/auth/login", payload);

export const apiSignUp = async (payload) => apiClient.post("/api/auth/registerAdmin", payload);

export const apiFarmerSignUp = async (payload) => apiClient.post("/api/auth/registeruser", payload);