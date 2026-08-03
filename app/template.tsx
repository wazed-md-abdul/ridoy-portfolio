"use client";

import React from "react";
import StairTransition from "@/components/ui/StairTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StairTransition />
      {children}
    </>
  );
}
