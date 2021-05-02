import { useEffect, useState } from 'react';
import { getProducts } from '../../../utils/yourService';

const ProductsFetcher = () => {

  const [produkts, setProdukts] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const proData = async () => {
      setStatus('loading');
      try {
        const content = await getProducts();
        setProdukts(content);
        setStatus('initial');
        console.log(produkts);
      } catch (error) {
        setStatus('error');
        setProdukts(error);
        console.log(error);
      }
    };
    proData();
  }, []);
  console.log(produkts);
  
  
  return ({status}, produkts);
}

export default ProductsFetcher;