"use client";

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Create QueryClient instance once and reuse
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-grow p-4 bg-gray-50">{children}</main>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
