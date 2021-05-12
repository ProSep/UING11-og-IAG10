import styled from "styled-components";

const Main = styled.main`
  min-height: 100%;
  padding: 0rem 1rem 0rem 1rem;
  margin: 0 auto 0 auto;
  padding: 10px;
  @media (${({ theme }) => theme.scale.medium}) {
    width: 1400px;
  }
`;

const DefaultLayout = ({ children }) => (
  <>
    <Main>{children}</Main>
  </>
);

export default DefaultLayout;
