const prisma = require("../db/index.js");

const findCustomers = async () => {
  const customers = await prisma.Pelanggan.findMany();
  return customers;
};

const findCustomerById = async (id) => {
  const customer = await prisma.Pelanggan.findUnique({ where: { id } });
  return customer;
};

const createCustomer = async (data) => {
  const newCustomer = await prisma.Pelanggan.create({ data });
  return newCustomer;
};

const updateCustomer = async (id, data) => {
  const updatedCustomer = await prisma.Pelanggan.update({
    where: { id },
    data,
  });
  return updatedCustomer;
};

const deleteCustomer = async (id) => {
  const deletedCustomer = await prisma.Pelanggan.delete({ where: { id } });
  return deletedCustomer;
};

module.exports = {
  findCustomers,
  findCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
