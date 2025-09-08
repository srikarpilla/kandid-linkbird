import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db/index";
import { campaigns } from "@/db/schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const allCampaigns = await db.select().from(campaigns);
    res.status(200).json(allCampaigns);
  } catch (error) {
    console.error("Failed to fetch campaigns:", error);
    res.status(500).json({ error: "Could not fetch campaigns." });
  }
}
