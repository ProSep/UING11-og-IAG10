import { useState } from 'react';
import Kategorier from './Kategorier';
import { getKategori } from '../utils/yourService';

const Kategori = () => {
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
        ? kategori.map((kategori) => <Kategorier key={kategori.slug} {...kategori} />)
        : null}
    </>
  );
};

export default Kategori;
