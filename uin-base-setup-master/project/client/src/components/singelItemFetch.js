import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const SingleItemFetch = ( whatContent ) => {
  const { slug }= useParams();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading');
      try {
        const content = await whatContent(slug);
        setData(content);
        setStatus('initial');
      } catch (error) {
        setStatus('error');
        setData(error);
      }
    };
    fetchData();
  }, [slug]);

  return { data , status };
};

export default SingleItemFetch;