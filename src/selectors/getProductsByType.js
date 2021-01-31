const { productos } = require('../data/productos');

export const getProductsByType = (type) => {
  const validProduct = [
    'Champú',
    'Acondicionador',
    'Jabón',
    'Arcillas',
    'Bautizo',
    'Baby Shower',
    'Boda',
    'Fiestas Infantiles',
    'Primera Comunión',
    'XV años',
    'Recuerdos Navideños',
    'Días de las madres',
    'Exfoliantes',
    'Bálsamo Labial',
    'Base de Glicerina',
    'Pigmentos no migrante',
    'Colorante Hidrosolube',
    'Fragancias',
    'Glitter',
    'Micas perladas',
    'Molde polietileno',
    'Aceite esencial',
    'Carbón activado',
    'Moldes de silicón',
  ];

  if (!validProduct.includes(type)) {
    throw new Error(`Esa categoría "${type}" no existe`);
  }

  return productos.filter((productos) => productos.type === type);
};
