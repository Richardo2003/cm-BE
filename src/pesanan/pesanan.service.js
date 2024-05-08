const { findOrders, findOrderById, createOrder, updateOrder, deleteOrder } = require("./pesanan.repository");

const getAllOrders = async () => {
  const orders = await findOrders();
  return orders;
};

const getOrderById = async (id) => {
  const order = await findOrderById(id);
  return order;
};

const createNewOrder = async (data) => {
  const newOrder = await createOrder(data);
  return newOrder;
};

const updateOrderData = async (id, data) => {
  const updatedOrder = await updateOrder(id, data);
  return updatedOrder;
};

const removeOrder = async (id) => {
  const deletedOrder = await deleteOrder(id);
  return deletedOrder;
};

module.exports = {
  getAllOrders,
  getOrderById,
  createNewOrder,
  updateOrderData,
  removeOrder,
};
