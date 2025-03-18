"use server";

import { ReactNode } from "react";

const AuthProvider: React.FC = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthProvider;
