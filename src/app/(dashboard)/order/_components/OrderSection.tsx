"use client";
import { useAuth } from "@/contexts/AuthProvider";
import React, { useEffect } from "react";

export const OrderSection = () => {
  const { user } = useAuth();

  useEffect(() => {}, []);

  return <div>{user?.name}</div>;
};
