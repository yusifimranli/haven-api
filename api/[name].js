import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function handler(req, res) {
  const filePath = path.join(__dirname, "data", "newarrival.json");

  const data = fs.readFileSync(filePath, "utf-8");
  const newArrival = JSON.parse(data);

  res.status(200).json(newArrival);
}