import { useEffect, useState } from 'react';
import { getKategoris } from '../../../utils/yourService';

const NavElements = () => {

  const [navitem, setNavitem] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const navData = async () => {
      setStatus('loading');
      try {
        const content = await getKategoris();
        setNavitem(content);
        setStatus('initial');
        console.log(navitem);
      } catch (error) {
        setStatus('error');
        setNavitem(error);
        console.log(error);
      }
    };
    navData();
  }, []);
  console.log(navitem);
  
  
  return ({status}, navitem);
}

export default NavElements;
