"use server";

import api from "@/lib/fetchApi";
import { User } from "@/shared/types/user.type";
import { AxiosError } from "axios";

export async function getMeAction(): Promise<{
  data: User | null;
  error: AxiosError | null;
}> {
  try {
    const res = await api.get(`/auth/admin/me`);
    return { data: res.data.data, error: null };
  } catch (error) {
    const axiosError = error as AxiosError;
    return { data: null, error: axiosError };
  }
}
