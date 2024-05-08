const {
    findItemsPesanan,
    createItemPesanan,
    findItemPesananById,
    updateItemPesanan,
    deleteItemPesanan,

  } = require("./itemPesanan.repository");
  
  const getAllItemsPesanan = async () => {
    const itemsPesanan = await findItemsPesanan();
    return itemsPesanan;
  };
  
  const getItemPesananById = async (id) => {
    const itemPesanan = await findItemPesananById(id);
    return itemPesanan;
  };
  
  const createNewItemPesanan = async (data) => {
    try {
      const newItemPesanan = await createItemPesanan(data);
      return newItemPesanan;
    } catch (error) {
      throw error;
    }
  };
  
  const updateExistingItemPesanan = async (id, data) => {
    const updatedItemPesanan = await updateItemPesanan(id, data);
    return updatedItemPesanan;
  };
  
  const deleteExistingItemPesanan = async (id) => {
    const deletedItemPesanan = await deleteItemPesanan(id);
    return deletedItemPesanan;
  };
  
  module.exports = {
    getAllItemsPesanan,
    createNewItemPesanan,
    updateExistingItemPesanan,
    deleteExistingItemPesanan,
    getItemPesananById,
  };
  
  