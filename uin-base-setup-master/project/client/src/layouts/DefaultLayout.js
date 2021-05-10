import styled from "styled-components";

const Main = styled.main`
  min-height: 100%;
`
const DefaultLayout = ({ children }) => (
  <>
    <Main>{children}</Main>
  </>
);

export default DefaultLayout;
