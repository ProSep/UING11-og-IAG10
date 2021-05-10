import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductsFetcher = (whatProducts) => {

  const { slug } = useParams();
  const [produkts, setProdukts] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const proData = async () => {
      setStatus('loading');
      try {
        const content = await whatProducts(slug);
        setProdukts(content);
        setStatus('initial');
      } catch (error) {
        setStatus('error');
        setProdukts(error);
        console.log(error);
      }
    };
    proData();
  }, [slug]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Noe gikk galt når data ble hentet. {produkts?.message}</p>;

  return { status }, produkts;
};


export default ProductsFetcher;
