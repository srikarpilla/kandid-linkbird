"use client";
import { useQuery } from "@tanstack/react-query";

type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  campaignId: string;
  status: string;
  lastContactDate: string; // ISO string
};

export default function LeadsPage() {
  const { data: leads, isLoading, error } = useQuery<Lead[]>({
    queryKey: ["leads"],
    queryFn: () =>
      fetch("/api/leads")
        .then((res) => res.json())
        .then((leads: Lead[]) =>
          leads.map((lead) => ({
            ...lead,
            lastContactDate:
              lead.lastContactDate instanceof Date
                ? lead.lastContactDate.toISOString()
                : lead.lastContactDate || "",
          }))
        ),
  });

  if (isLoading) return <div>Loading leads...</div>;
  if (error) return <div>Error loading leads.</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Company</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Last Contact</th>
          </tr>
        </thead>
        <tbody>
          {leads?.map((lead) => (
            <tr key={lead.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{lead.name}</td>
              <td className="border px-4 py-2">{lead.email}</td>
              <td className="border px-4 py-2">{lead.company}</td>
              <td className="border px-4 py-2">{lead.status}</td>
              <td className="border px-4 py-2">
                {new Date(lead.lastContactDate).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
