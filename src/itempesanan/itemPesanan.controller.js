const {
    getAllItemsPesanan,
    createNewItemPesanan,
    updateExistingItemPesanan,
    deleteExistingItemPesanan,
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
  
  router.put("/:id", async (req, res) => {
    const updatedItemPesanan = await updateExistingItemPesanan(req.params.id, req.body);
    res.json(updatedItemPesanan);
  });
  
  router.delete("/:id", async (req, res) => {
    const deletedItemPesanan = await deleteExistingItemPesanan(req.params.id);
    res.json(deletedItemPesanan);
  });
 
  
  module.exports = router;
  