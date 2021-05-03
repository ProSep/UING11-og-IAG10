import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../../utils/yourService';

const ProductsFetcher = () => {
  const { slug } = useParams();
  const [produkts, setProdukts] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const proData = async () => {
      setStatus('loading');
      try {
        const content = await getProducts( slug );
        setProdukts(content);
        setStatus('initial');
      } catch (error) {
        setStatus('error');
        setProdukts(error);
        console.log(error);
        console.log(slug);
      }
    };
    proData();
  }, [ slug ]);
  console.log(produkts);
  
  
  return ({status}, produkts);
}

export default ProductsFetcher;