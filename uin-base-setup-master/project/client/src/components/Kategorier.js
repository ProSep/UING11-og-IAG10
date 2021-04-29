import { useState } from 'react';
import Kategori from './Kategori';
import { getKategori } from '../utils/yourService';

const Kategorier = () => {
  const [kategori, setKategori] = useState([]);

  const handleClick = async () => {
    const data = await getKategori();
    setKategori(data);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Button
      </button>

      {kategori?.length > 0
        ? kategori.map((kategori) => <Kategori key={kategori.slug} {...kategori} />)
        : null}
    </>
  );
};

export default Kategorier;
