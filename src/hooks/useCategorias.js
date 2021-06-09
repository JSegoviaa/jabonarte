import { useEffect, useState } from 'react';
import { fetchCategorias } from '../helpers/fetchJabonarte';

export const useCategorias = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetchCategorias(url).then((categorias) => {
      setIsLoading(false);
      setCategorias(categorias);
    });
  }, [url]);

  return { isLoading, categorias };
};
