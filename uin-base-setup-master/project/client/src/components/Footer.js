import styled from 'styled-components';
import Register from './Login/Register';

const FooterArea = styled.footer`
  padding: 44px;
  background-color: ${({ theme }) => theme.colors.dark};
  margin-top: 255px;
`;

const StyledFooter = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto 0 auto;
  @media (${({ theme }) => theme.scale.medium}) {
    width: 1400px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  @media (${({ theme }) => theme.scale.small}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  } ;
`;

const FooterBox1 = styled.section`
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  display: block;
  grid-columns: 1;
  margin-right: 10rem;

  @media (${({ theme }) => theme.scale.small}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-right: 5rem;
  } ;
`;

const FooterBox2 = styled.section`
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  display: block;
  grid-columns: 2;

  @media (${({ theme }) => theme.scale.small}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  } ;
`;

const KontaktFooter = styled.p`
  margin-bottom: 2.5rem;
`;

const Footer = () => (
  <FooterArea>
    <StyledFooter>
      <FooterBox1>
        <KontaktFooter>Outland AS</KontaktFooter>
        <KontaktFooter>Kirkegata 23 0153 Oslo</KontaktFooter>
        <KontaktFooter>kundeservice@outland.no</KontaktFooter>
        <KontaktFooter>Kontakt - 55 31 48 22</KontaktFooter>
        <KontaktFooter>Mandag–onsdag: 10.00–18.00</KontaktFooter>
      </FooterBox1>
      <FooterBox2>
        <Register />
      </FooterBox2>
    </StyledFooter>
  </FooterArea>
);

export default Footer;
