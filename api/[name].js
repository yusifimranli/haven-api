import newArrival from "./data/newarrival.json" with { type: "json" };

export default function handler(req, res) {
  res.status(200).json(newArrival);
}