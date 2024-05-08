const {
    getAllItemsPesanan,
    createNewItemPesanan,
    getItemPesananById
  
  } = require("./itemPesanan.service");
  const router = require("express").Router();
  
  router.get("/", async (req, res) => {
    const itemsPesanan = await getAllItemsPesanan();
    res.json(itemsPesanan);
  });
  
  router.get("/:id", async (req, res) => {
    const itemPesanan = await getItemPesananById(req.params.id);
    res.json(itemPesanan);
  });
  
  router.post("/", async (req, res) => {
    try {
      const newItemPesanan = await createNewItemPesanan(req.body);
      res.json(newItemPesanan);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
 
  
  module.exports = router;
  