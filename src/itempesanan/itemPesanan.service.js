const {
    findItemsPesanan,
    createItemPesanan,
    findItemPesananById,

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
  
  
  module.exports = {
    getAllItemsPesanan,
    createNewItemPesanan,
    getItemPesananById,
  };
  
  