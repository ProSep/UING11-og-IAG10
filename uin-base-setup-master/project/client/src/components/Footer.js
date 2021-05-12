import styled from 'styled-components';
import Register from './Login/Register';

const FooterArea = styled.footer`
  padding: 44px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const StyledFooter = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto 0 auto;
  @media (${({ theme }) => theme.scale.medium}) {
    width: 1400px;
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
`;

const FooterBox2 = styled.section`
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  display: block;
  grid-columns: 2;
`;

const Footer = () => (
  <FooterArea>
    <StyledFooter>
      <FooterBox1>
        <p>THIS IS A FOOTER STILL IN UNDER CONSTRUCTION!</p>
        <p>Empty Space: A New Hope for Space</p>
      </FooterBox1>
      <FooterBox2>
        <Register />
      </FooterBox2>
    </StyledFooter>
  </FooterArea>
);

export default Footer;
