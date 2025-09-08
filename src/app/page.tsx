import Link from "next/link";

export const metadata = {
  title: "Kandid Dashboard",
};

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <nav className="flex space-x-6 text-blue-600 font-semibold mb-8">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/leads">Leads</Link>
        <Link href="/campaigns">Campaigns</Link>
        <Link href="/settings">Settings</Link>
      </nav>

      <h1 className="text-4xl font-bold">Welcome to Kandid Dashboard</h1>
      <p>Use the navigation above to access app sections.</p>
    </main>
  );
}
