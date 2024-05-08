const prisma = require("../db/index.js");

const findOrders = async () => {
  const orders = await prisma.Pesanan.findMany();
  return orders;
};

const findOrderById = async (id) => {
  const order = await prisma.Pesanan.findUnique({ where: { id } });
  return order;
};

const createOrder = async (data) => {
  const newOrder = await prisma.Pesanan.create({ data });
  return newOrder;
};

const updateOrder = async (id, data) => {
  const updatedOrder = await prisma.Pesanan.update({ where: { id }, data });
  return updatedOrder;
};

const deleteOrder = async (id) => {
  const deletedOrder = await prisma.Pesanan.delete({ where: { id } });
  return deletedOrder;
};

module.exports = {
  findOrders,
  findOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
