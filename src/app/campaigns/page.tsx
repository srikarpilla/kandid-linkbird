"use client";
import { useQuery } from "@tanstack/react-query";

type Campaign = {
  id: string;
  name: string;
  status: string;
  createdAt: string; // ISO string
};

export default function CampaignsPage() {
  const { data: campaigns, isLoading, error } = useQuery<Campaign[]>({
    queryKey: ["campaigns"],
    queryFn: () =>
      fetch("/api/campaigns")
        .then((res) => res.json())
        .then((campaigns: Campaign[]) =>
          campaigns.map((campaign) => ({
            ...campaign,
            createdAt: campaign.createdAt || "",
          }))
        ),
  });

  if (isLoading) return <div>Loading campaigns...</div>;
  if (error) return <div>Error loading campaigns.</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Created At</th>
          </tr>
        </thead>
        <tbody>
          {campaigns?.map((campaign) => (
            <tr key={campaign.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{campaign.name}</td>
              <td className="border px-4 py-2">{campaign.status}</td>
              <td className="border px-4 py-2">
                {new Date(campaign.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
