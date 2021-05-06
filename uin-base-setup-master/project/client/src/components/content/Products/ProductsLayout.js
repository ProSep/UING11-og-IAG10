import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { urlFor } from '../../../utils/imageHandler';

const Div = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
`;

const ProductsLayout = ({
  tittel,
  slug,
  detaljer,
  forfatter,
  bilde,
  kslug,
}) => (
  <Div>
    <Link to={`/${kslug}/${slug}`} className={slug}>
      <h2>{tittel}</h2>
      <p>{detaljer}</p>
      <p>{forfatter}</p>
      {bilde ? (
        <img
          src={urlFor(bilde).width(300).format('webp').url()}
          alt={bilde.beskrivelse}
        />
      ) : null}
    </Link>
  </Div>
);

export default ProductsLayout;
