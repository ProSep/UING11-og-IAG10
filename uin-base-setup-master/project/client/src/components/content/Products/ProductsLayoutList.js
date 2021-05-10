import { Link } from "react-router-dom";
import styled from "styled-components";
import { urlFor } from "../../../utils/imageHandler";

const ProductBox = styled(Link)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
  height: 250px;
  overflow: hidden;
  width:100%;
  position: relative;
  border-radius: 15px;
  padding: 2%;
  transition-duration: 0.3s;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  }
`;

const ProductImage = styled.img`
  margin: 0 0 0 0;
  height: 210px;
  width: auto;
  display: block;
  grid-column: 1;
`;

const ProductInfo = styled.section`
  margin: 1rem 0 0 0;
  height: 80%;
  display: block;
  text-decoration: none;
  grid-column: 2;
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

const ProductsLayoutList = ({
  tittel,
  slug,
  forfatter,
  bilde,
  kslug,
  price,
  sjangerer
}) => (
    <ProductBox to={`/${kslug}/${slug}`} className={slug}>
      <section>
        {bilde ? (
          <ProductImage
            src={urlFor(bilde).width(240).height(340).format("webp").url()}
            alt={bilde.beskrivelse}/>) : null}
          </section>
      <ProductInfo>
        <ProductH2>{tittel}</ProductH2>
        <ProductP>{sjangerer} {sjangerer} {sjangerer}</ProductP>
        <ProductP>{forfatter}</ProductP>
        <PrisTextP>PRIS PÅ NETT</PrisTextP>
        <PrisP>{price} KR</PrisP>
      </ProductInfo>
    </ProductBox>
);

export default ProductsLayoutList;
