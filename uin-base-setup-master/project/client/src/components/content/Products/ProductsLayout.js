import { Link } from "react-router-dom";
import styled from "styled-components";
import { urlFor } from "../../../utils/imageHandler";

const ProductBoxGrid = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  display: block;
  height: 100%;
  overflow: hidden;
  width:100%;
  position: relative;
  border-radius: 15px;
  padding: 5%;
  transition-duration: 0.3s;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  }
`;

const ProductBoxList = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  width:100%;
  position: relative;
  border-radius: 15px;
  padding: 5%;
  transition-duration: 0.3s;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  }
`;

const ProductImageGrid = styled.img`
  justify-content: center;
  margin: 0 auto 0 auto;
  width: 80%;
  display: block;
`;

const ProductImageList = styled.img`
  margin: 0 0 0 0;
  height: 100px;
  width: auto;
  display: block;
`;

const ProductInfo = styled.section`
  justify-content: center;
  margin: 1rem 0 0 0;
  height: 80%;
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
  sjangerer
}) => (
  <ProductBoxList>
    <Link to={`/${kslug}/${slug}`} className={slug} style={{ textDecoration: 'none' }}>
    {bilde ? (
        <ProductImageList
          src={urlFor(bilde).width(240).height(340).format("webp").url()}
          alt={bilde.beskrivelse}
        />
      ) : null}
      <ProductInfo>
        <ProductH2>{tittel}</ProductH2>
        <ProductP>{sjangerer} {sjangerer} {sjangerer}</ProductP>
        <ProductP>{forfatter}</ProductP>
        <PrisTextP>PRIS PÅ NETT</PrisTextP>
        <PrisP>{price} KR</PrisP>
      </ProductInfo>
    </Link>
  </ProductBoxList>
);

export default ProductsLayout;
