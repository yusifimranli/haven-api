import { createRequire } from "module";

const require = createRequire(import.meta.url);

const newArrivals = require("./data/newArrivals.json");
const haven = require("./data/haven.json");

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { name } = req.query;

  if (name === "newArrival") {
    return res.status(200).json(newArrivals);
  }

  if (name === "haven") {
    return res.status(200).json(haven);
  }

  return res.status(404).json({
    message: "Not found",
  });
}