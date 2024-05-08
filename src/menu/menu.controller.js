const express = require("express");
const prisma = require("../db/index.js");
const router = express.Router();

// GET all menus
router.get("/", async (req, res) => {
  const menu = await prisma.Menu.findMany();
  res.json(menu);
});

// GET a specific menu by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const menu = await prisma.Menu.findUnique({ where: { id: parseInt(id) } });
  res.json(menu);
});

// CREATE a new menu
router.post("/", async (req, res) => {
  const { nama, harga, deskripsi } = req.body;
  const newMenu = await prisma.Menu.create({
    data: { nama, harga, deskripsi },
  });
  res.json(newMenu);
});

// UPDATE a menu by id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nama, harga, deskripsi } = req.body;
  const updatedMenu = await prisma.Menu.update({
    where: { id: parseInt(id) },
    data: { nama, harga, deskripsi },
  });
  res.json(updatedMenu);
});

// DELETE a menu by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedMenu = await prisma.Menu.delete({ where: { id: parseInt(id) } });
  res.json(deletedMenu);
});

module.exports = router;
