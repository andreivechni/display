import { NextApiRequest, NextApiResponse } from "next";
import { projects } from "../../mocks/projects";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let response = projects;

  const limit = req.query._limit;

  if (limit) response = response.slice(0, Number(limit));

  const filter = req.query.category_like;

  if (filter) response = response.filter((item) => item.category === filter);

  res.setHeader("x-total-count", projects.length);
  res.status(200).json(response);
}
