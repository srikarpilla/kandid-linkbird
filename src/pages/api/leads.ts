import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db/index";
import { leads } from "@/db/schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Query using Leads table object, not a string
    const allLeads = await db.select().from(leads);
    res.status(200).json(allLeads);
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error" });
  }
}
