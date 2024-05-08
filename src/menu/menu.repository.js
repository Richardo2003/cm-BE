const prisma = require("../db/index.js");

const findMenus = async () => {
  const menus = await prisma.Menu.findMany();
  return menus;
};

const findMenuById = async (id) => {
  const menu = await prisma.Menu.findUnique({ where: { id } });
  return menu;
};

const createMenu = async (data) => {
  const newMenu = await prisma.Menu.create({ data });
  return newMenu;
};

const updateMenu = async (id, data) => {
  const updatedMenu = await prisma.Menu.update({ where: { id }, data });
  return updatedMenu;
};

const deleteMenu = async (id) => {
  const deletedMenu = await prisma.Menu.delete({ where: { id } });
  return deletedMenu;
};

module.exports = {
  findMenus,
  findMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
};
