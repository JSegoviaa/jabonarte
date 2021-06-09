import { useEffect, useState } from 'react';
import { fetchProductos } from '../helpers/fetchJabonarte';

export const useProductos = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchProductos(url).then((productos) => {
      setIsLoading(false);
      setProductos(productos);
    });
  }, [url]);

  return { isLoading, productos };
};
