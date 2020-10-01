const { productos } = require('../data/productos');

export const getProductsByType = (type) => {
  const validProduct = ['Champú', 'Acondicionador', 'Jabón', 'Arcillas'];

  if (!validProduct.includes(type)) {
    throw new Error(`Esa categoría "${type}" no existe`);
  }

  return productos.filter((productos) => productos.type === type);
};
