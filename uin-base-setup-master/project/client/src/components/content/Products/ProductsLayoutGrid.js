import { Link } from "react-router-dom";
import styled from "styled-components";
import { ForfatterP, PrisP, PrisTextP, ProductH2, SjangerP } from "../../../styles/Styles";
import { urlFor } from "../../../utils/imageHandler";

const ProductBox = styled(Link)`
  display: block;
  text-decoration: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  height: 100%;
  overflow: hidden;
  width: 100%;
  position: relative;
  border-radius: 15px;
  padding: 5%;
  transition-duration: 0.3s;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  }
`;

const ProductImage = styled.img`
  justify-content: center;
  margin: 0 auto 0 auto;
  max-width: 80%;
  display: block;
  grid-row: 1;
`;

const ProductInfo = styled.section`
  margin: 1rem auto 0 auto;
  display: block;
  text-decoration: none;
  max-width: 80%;
  grid-row: 2;
  
`;

const ProductsLayoutGrid = ({
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

export default ProductsLayoutGrid;
