// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  content: string;
};

// Generously taken from stackoverflow.
const genRand = (len: number) => {
  return Math.random()
    .toString(36)
    .substring(2, len + 2);
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ content: genRand(50) });
}
