const express = require("express");
const prisma = require("../db/index.js");
const router = express.Router();

// GET all orders
router.get("/", async (req, res) => {
  const pesanan = await prisma.Pesanan.findMany();
  res.json(pesanan);
});

// GET a specific order by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pesanan = await prisma.Pesanan.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(pesanan);
});

// CREATE a new order
router.post("/", async (req, res) => {
  const { tanggal, waktu, lokasi, jumlah, metode_bayar, status, pelangganId } = req.body;
  const newPesanan = await prisma.Pesanan.create({
    data: {
      tanggal: new Date(tanggal),
      waktu: new Date(waktu),
      lokasi,
      jumlah,
      metode_bayar,
      status,
      pelangganId,
    },
  });
  res.json(newPesanan);
});

// UPDATE an order by id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { tanggal, waktu, lokasi, jumlah, metode_bayar, status, pelangganId } = req.body;
  const updatedPesanan = await prisma.Pesanan.update({
    where: { id: parseInt(id) },
    data: { tanggal, waktu, lokasi, jumlah, metode_bayar, status, pelangganId },
  });
  res.json(updatedPesanan);
});

// DELETE an order by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPesanan = await prisma.Pesanan.delete({
    where: { id: parseInt(id) },
  });
  res.json(deletedPesanan);
});

module.exports = router;
