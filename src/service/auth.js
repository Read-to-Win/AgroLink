import { apiClient } from "./config";

export const apiLogin = async (payload) => apiClient.post("/api/auth/login", payload);

export const apiSignUp = async (payload) => apiClient.post("/api/auth/registerUser", payload);

export const apiFarmerSignUp = async (payload) => apiClient.post("/auth/forgot-password", payload);