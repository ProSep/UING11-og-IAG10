const Kategorier = ({ tittel, kategori, bilde}) => (
  <article>
    <h3>{tittel}</h3>
    <p>{kategori}</p>
    <img src={bilde}/>
  </article>
);

export default Kategorier;
