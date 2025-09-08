import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db/index";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const leads = await db.select().from("leads");
    res.status(200).json(leads);
  } catch {
    res.status(500).json({ error: "Failed to fetch leads" });
  }
}
