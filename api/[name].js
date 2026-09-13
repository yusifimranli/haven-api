import newArrivals from "./data/newArrivals.json";
import haven from "./data/haven.json";
import features from "./data/features.json";
import news from "./data/news.json";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { name } = req.query;

  if (name === "newarrival") {
    return res.status(200).json(newArrivals);
  }

  if (name === "haven") {
    return res.status(200).json(haven);
  }

  if (name === "features") {
    return res.status(200).json(features);
  }

  if (name === "news") {
    return res.status(200).json(news);
  }

  return res.status(404).json({
    message: "Not found",
  });
}