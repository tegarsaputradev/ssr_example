"use client";
import { useAuth } from "@/contexts/AuthProvider";
import React from "react";

export const OrderSection = () => {
  const { user } = useAuth();
  return <div>{user?.name}</div>;
};
