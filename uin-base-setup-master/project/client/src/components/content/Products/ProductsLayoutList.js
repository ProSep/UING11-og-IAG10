import { Link } from "react-router-dom";
import styled from "styled-components";
import { ForfatterP, PrisP, PrisTextP, ProductH2, SjangerP } from "../../../styles/Styles";
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
        {sjangerer?.length > 0 ? sjangerer.map((sjangerer) => <SjangerP key={sjangerer.slug}>{sjangerer}</SjangerP>) : null}
        <ForfatterP>{forfatter}</ForfatterP>
        <PrisTextP>PRIS PÅ NETT</PrisTextP>
        <PrisP>{price} KR</PrisP>
      </ProductInfo>
    </ProductBox>
);

export default ProductsLayoutList;
