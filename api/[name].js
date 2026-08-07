import { createRequire } from "module";

const require = createRequire(import.meta.url);

const newArrival = require("./data/newarrival.json");

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { name } = req.query;

  if (name === "newarrival") {
    return res.status(200).json(newArrival);
  }

  return res.status(404).json({
    message: "Not found",
  });
}