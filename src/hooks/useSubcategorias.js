import { useEffect, useState } from 'react';
import { fetchSubcategorias } from '../helpers/fetchJabonarte';

export const useSubcategorias = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    fetchSubcategorias(url).then((subcategorias) => {
      setIsLoading(false);
      setSubCategorias(subcategorias);
    });
  }, [url]);

  return { isLoading, subcategorias };
};
