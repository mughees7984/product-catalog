import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

const items = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with 40hr battery life",
  },
  {
    id: 2,
    name: "Smart Watch",
    description:
      "Fitness tracker with heart rate, sleep monitor & notifications",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and waterproof design",
  },
  {
    id: 4,
    name: "Laptop Stand",
    description: "Adjustable aluminum stand for laptops and tablets",
  },
  {
    id: 5,
    name: "USB-C Hub",
    description: "Multiport adapter with HDMI, USB 3.0, and SD card reader",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    description: "RGB backlit keyboard with blue switches and ergonomic design",
  },
  {
    id: 7,
    name: "4K Monitor",
    description: "27-inch ultra HD monitor with IPS panel and HDR support",
  },
  {
    id: 8,
    name: "Webcam",
    description: "1080p HD webcam with built-in microphone and autofocus",
  },
  {
    id: 9,
    name: "Ergonomic Chair",
    description: "Office chair with lumbar support and adjustable height",
  },
  {
    id: 10,
    name: "External SSD",
    description: "1TB portable SSD with high-speed data transfer",
  },
  {
    id: 11,
    name: "Internal SSD",
    description: "1TB portable SSD with high-speed data transfer",
  },
];

// ✅ Corrected route for pagination
app.get("/api/items", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || items.length;
  const search = req.query.search?.toLowerCase() || "";

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
  );

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedItems = filteredItems.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredItems.length / limit);

  res.json({
    items: paginatedItems,
    currentPage: page,
    totalPages: totalPages,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
