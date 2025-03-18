import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "@/shared/types/user.type";
import { getMeAction } from "@/app/(auth)/auth.action";
import { AxiosError, AxiosResponse } from "axios";

interface AuthContext {
  user: User | undefined;
}
const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();

  const getMe = useCallback(async () => {
    const res: {
      data: User | null;
      error: AxiosError | null;
    } = await getMeAction();
    if (res.data) setUser(res.data);
  }, []);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be on AuthProvider");
  return context;
};
