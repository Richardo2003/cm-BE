const express = require("express");
const prisma = require("../db/index.js");
const router = express.Router();

// GET all customers
router.get("/", async (req, res) => {
  const pelanggan = await prisma.Pelanggan.findMany();
  res.json(pelanggan);
});

// GET a specific customer by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pelanggan = await prisma.Pelanggan.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(pelanggan);
});

// CREATE a new customer
router.post("/", async (req, res) => {
  const { nama, alamat, telepon, email } = req.body;
  const newPelanggan = await prisma.Pelanggan.create({
    data: { nama, alamat, telepon, email },
  });
  res.json(newPelanggan);
});

// UPDATE a customer by id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nama, alamat, telepon, email } = req.body;
  const updatedPelanggan = await prisma.Pelanggan.update({
    where: { id: parseInt(id) },
    data: { nama, alamat, telepon, email },
  });
  res.json(updatedPelanggan);
});

// DELETE a customer by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPelanggan = await prisma.Pelanggan.delete({
    where: { id: parseInt(id) },
  });
  res.json(deletedPelanggan);
});

module.exports = router;
