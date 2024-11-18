"use client";

import StoreProvider from "@/lib/redux";
import React from "react";
import DashboardLayout from "./dashboardWrapper";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
}
