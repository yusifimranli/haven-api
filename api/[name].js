import newArrival from "./data/newarrival.json" with { type: "json" };

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