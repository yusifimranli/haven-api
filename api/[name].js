import { createRequire } from "module";

const require = createRequire(import.meta.url);

const newArrival = require("./data/newarrival.json");

export default function handler(req, res) {
  return res.status(200).json(newArrival);
}