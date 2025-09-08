import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <header className="mb-8">
        <nav className="flex space-x-6 text-blue-600 font-semibold">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/leads">Leads</Link>
          <Link href="/campaigns">Campaigns</Link>
          <Link href="/settings">Settings</Link>
        </nav>
      </header>

      <section>
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-lg text-gray-700">
          Use the navigation above to visit different sections of your app.
        </p>
      </section>
    </main>
  );
}
