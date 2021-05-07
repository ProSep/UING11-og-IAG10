import { Link } from "react-router-dom";
import styled from "styled-components";
import { urlFor } from "../../../utils/imageHandler";

const ProductBox = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  display: block;
  align-items: center;
  height: 100%;
  overflow: hidden;
  width:100%;
  position: relative;
  border-radius: 15px;
  padding: 5%;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  }
`;

const ProductImage = styled.img`
  justify-content: center;
  margin: 0 auto 0 auto;
  width: 80%;
  display: block;
`;

const ProductInfo = styled.section`
  justify-content: center;
  margin: 1rem auto 0 auto;
  width: 80%;
  display: block;
  text-decoration: none;
`;

const ProductH2 = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: black;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 1rem;
`

const ProductP = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: black;
  margin: 1rem;
`
const PrisTextP = styled.p`
  font-size: 1.3rem;
  text-align: center;
  color: black;
  margin: 3rem 0 1rem 0;
  font-weight: bold;
`

const PrisP = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: black;
  margin: 1rem;
  font-weight: bold;
`


const ProductsLayout = ({
  tittel,
  slug,
  forfatter,
  bilde,
  kslug,
  price,
}) => (
  <ProductBox>
    <Link to={`/${kslug}/${slug}`} className={slug} style={{ textDecoration: 'none' }}>
    {bilde ? (
        <ProductImage
          src={urlFor(bilde).width(240).height(340).format("webp").url()}
          alt={bilde.beskrivelse}
        />
      ) : null}
      <ProductInfo>
        <ProductH2>{tittel}</ProductH2>
        <ProductP>{forfatter}</ProductP>
        <PrisTextP>PRIS PÅ NETT</PrisTextP>
        <PrisP>{price} KR</PrisP>
      </ProductInfo>
    </Link>
  </ProductBox>
);

export default ProductsLayout;
