import { jabonarteApi } from '../api/jabonarteApi';

export const fetchCategorias = async (url = '') => {
  const resp = await jabonarteApi.get(`/categorias${url}`);
  const categorias = resp.data;
  return categorias;
};

export const fetchSubcategorias = async (url = '') => {
  const resp = await jabonarteApi.get(`/subcategorias${url}`);
  const subcategorias = resp.data;
  return subcategorias;
};

export const fetchProductos = async (url = '') => {
  const resp = await jabonarteApi.get(`/productos${url}`);
  const productos = resp.data;
  return productos;
};
