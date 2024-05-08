const prisma = require("../db");
const {
  findCustomers,
  findCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("./pelanggan.repository");

const getAllCustomers = async () => {
  const customers = await findCustomers();
  return customers;
};

const getCustomerById = async (id) => {
  const customer = await findCustomerById(id);
  return customer;
};

const createNewCustomer = async (data) => {
  const newCustomer = await createCustomer(data);
  return newCustomer;
};

const updateCustomerData = async (id, data) => {
  const updatedCustomer = await updateCustomer(id, data);
  return updatedCustomer;
};

const removeCustomer = async (id) => {
  const deletedCustomer = await deleteCustomer(id);
  return deletedCustomer;
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createNewCustomer,
  updateCustomerData,
  removeCustomer,
};
