import styled from "styled-components";

const FooterContainter = styled.section`
  background: ${({ theme }) => theme.colors.background};
  margin-top: 200px;
`

const Footer = () => (
  <FooterContainter>
    <div className="footer-container">
      <div className="content-wrap">
        <p>THIS IS A FOOTER STILL IN UNDER CONSTRUCTION!</p>
        <p>skgnsdkdsgsgn</p>
      </div>
    </div>
  </FooterContainter>
);

export default Footer;

/* don't for get to create the Footer own separate */
