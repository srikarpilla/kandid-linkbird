// app/dashboard/page.tsx

const campaigns = [
  { id: "campaign1", name: "Spring Sale", status: "Active", created_at: "2025-09-08 13:47:08.255982" },
  { id: "campaign2", name: "Winter Offer", status: "Paused", created_at: "2025-09-08 13:47:08.255982" },
  { id: "6", name: "Campaign 6", status: "active", created_at: "2025-09-10 10:00:00" },
  { id: "7", name: "Campaign 7", status: "paused", created_at: "2025-09-09 09:30:00" },
  { id: "8", name: "Campaign 8", status: "completed", created_at: "2025-09-08 14:15:00" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <h2 className="text-xl font-semibold mb-4">Recent Campaigns</h2>
      <div className="overflow-x-auto rounded shadow border border-gray-700 bg-black">
        <table className="min-w-full border-separate border-spacing-y-1">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(c => (
              <tr key={c.id} className="bg-gray-950">
                <td className="px-4 py-2">{c.id}</td>
                <td className="px-4 py-2">{c.name}</td>
                <td className="px-4 py-2 capitalize">{c.status}</td>
                <td className="px-4 py-2">{c.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
