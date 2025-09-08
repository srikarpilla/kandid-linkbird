import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db/index";
import { campaigns } from "@/db/schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set");
    }
    const allCampaigns = await db.select().from(campaigns);
    res.status(200).json(allCampaigns);
  } catch (error) {
    console.error("Failed to fetch campaigns:", error);
    res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error" });
  }
}
