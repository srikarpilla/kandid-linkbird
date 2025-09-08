import { supabase } from '@/lib/supabase';

export default async function LeadsPage() {
  const { data: leads, error } = await supabase
    .from('leads')
    .select('id, name, email, company, status, last_contact_date')
    .limit(50);

  if (error) return <div>Error loading leads: {error.message}</div>;

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Leads</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Company</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Last Contact</th>
          </tr>
        </thead>
        <tbody>
          {leads?.map((lead) => (
            <tr key={lead.id}>
              <td className="border border-gray-300 p-2">{lead.name}</td>
              <td className="border border-gray-300 p-2">{lead.email}</td>
              <td className="border border-gray-300 p-2">{lead.company}</td>
              <td className="border border-gray-300 p-2">{lead.status}</td>
              <td className="border border-gray-300 p-2">{new Date(lead.last_contact_date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
