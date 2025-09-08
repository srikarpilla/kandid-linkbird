import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db/index";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const campaigns = await db.select().from("campaigns");
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch campaigns." });
  }
}
