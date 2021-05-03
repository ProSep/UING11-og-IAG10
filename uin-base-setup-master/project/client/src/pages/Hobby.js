// import { StyleDeluxe5 } from '../styles/Styles';
import MangaStyled from '../styles/MangaCompsStyles';
import HobbyStyles from '../styles/HomeCompsStyles';
import HobbyImg from '../images/hobby-edit2.jpg';

const Hobby = () => (
  <HobbyStyles>
    <>
      <img
        src={HobbyImg}
        alt="Outland butikk nyheter"
        height="450"
        width="690"
      />
    </>
  </HobbyStyles>
);
export default Hobby;
