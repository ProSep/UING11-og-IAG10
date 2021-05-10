import { ProductsArea } from "../../../styles/Styles";
import ProductsFetcher from "./ProductsFetcher";
import styled from "styled-components";
import ProductsLayoutGrid from "./ProductsLayoutGrid";

const Viewbuttons = styled.button`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border: none;
  border-radius: 3px;
  align-content: center;
  display: flex;
  transition-duration: 0.1s;
  margin: 40 40 40 40;
  :hover {
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
  }
`;

const HomePageCards = ({ whatProducts }) => {
  const produkts = ProductsFetcher(whatProducts);

  return (
    <>
      <ProductsArea grid="repeat(4, 1fr)">
        {produkts?.length > 0
          ? produkts.map((produkts) => (
              <ProductsLayoutGrid key={produkts.slug} {...produkts} />
            ))
          : null}
      </ProductsArea>
    </>
  );
};
export default HomePageCards;
