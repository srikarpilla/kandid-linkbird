import React, { useEffect, useState } from 'react';

type Campaign = {
  id: number;
  name: string;
  status: string;
  created_at: string;
};

export default function CampaignsList() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const res = await fetch('/api/campaigns');
        if (!res.ok) throw new Error(`Failed to fetch campaigns, status: ${res.status}`);
        const data: Campaign[] = await res.json();
        setCampaigns(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchCampaigns();
  }, []);

  if (loading) return <p>Loading campaigns...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Campaigns List</h1>
      <div className="overflow-x-auto border border-gray-300 rounded-md bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-3 text-left text-gray-900">ID</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-gray-900">Name</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-gray-900">Status</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-gray-900">Created At</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(({ id, name, status, created_at }, index) => (
              <tr
                key={id}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="border border-gray-300 px-4 py-2">{id}</td>
                <td className="border border-gray-300 px-4 py-2">{name}</td>
                <td className="border border-gray-300 px-4 py-2">{status}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
