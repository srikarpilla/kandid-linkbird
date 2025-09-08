"use client";

import Link from "next/link";
import { useSidebarStore } from "@/store/ui";

export default function Sidebar() {
  const { collapsed, setCollapsed } = useSidebarStore();

  return (
    <aside
      className={`h-screen bg-gray-800 text-white transition-width duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-2 m-2 bg-gray-700 rounded"
      >
        {collapsed ? ">" : "<"}
      </button>
      <nav className="flex flex-col space-y-4 px-3">
        <Link href="/dashboard" className="hover:bg-gray-700 px-2 py-1 rounded">
          Dashboard
        </Link>
        <Link href="/leads" className="hover:bg-gray-700 px-2 py-1 rounded">
          Leads
        </Link>
        <Link href="/campaigns" className="hover:bg-gray-700 px-2 py-1 rounded">
          Campaigns
        </Link>
        <Link href="/settings" className="hover:bg-gray-700 px-2 py-1 rounded">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
