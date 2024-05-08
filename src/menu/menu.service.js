const {
    findMenus,
    findMenuById,
    createMenu,
    updateMenu,
    deleteMenu,
  } = require("./menu.repository");
  
  const getAllMenus = async () => {
    const menus = await findMenus();
    return menus;
  };
  
  const getMenuById = async (id) => {
    const menu = await findMenuById(id);
    return menu;
  };
  
  const createNewMenu = async (data) => {
    const newMenu = await createMenu(data);
    return newMenu;
  };
  
  const updateMenuData = async (id, data) => {
    const updatedMenu = await updateMenu(id, data);
    return updatedMenu;
  };
  
  const removeMenu = async (id) => {
    const deletedMenu = await deleteMenu(id);
    return deletedMenu;
  };
  
  module.exports = {
    getAllMenus,
    getMenuById,
    createNewMenu,
    updateMenuData,
    removeMenu,
  };
  