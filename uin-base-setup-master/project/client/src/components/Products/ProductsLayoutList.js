import { Link } from "react-router-dom";
import styled from "styled-components";
import { ForfatterP, PrisP, PrisTextP, ProductH2, SjangerP } from "../../styles/Styles";
import { urlFor } from "../../utils/imageHandler";

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
  sjangerer,
  index
}) => (
  <ProductBox to={`/${kslug}/${slug}`} className={slug} key={slug}>
  <section key={index}>
    {bilde ? (
      <ProductImage
        src={urlFor(bilde).width(240).height(340).format("webp").url()}
        alt={bilde.beskrivelse} key={index}/>) : null}
  </section>
  <ProductInfo key={index}>
    <ProductH2 key={index}>{tittel}</ProductH2>
    {sjangerer?.length > 0 ? sjangerer.map((sjangerer, index) => <SjangerP key={index}>{sjangerer}</SjangerP>) : null}
    <ForfatterP key={index}>{forfatter}</ForfatterP>
    <PrisTextP key={index}>PRIS PÅ NETT</PrisTextP>
    <PrisP key={index}>{price} KR</PrisP>
  </ProductInfo>
</ProductBox>
);

export default ProductsLayoutList;
