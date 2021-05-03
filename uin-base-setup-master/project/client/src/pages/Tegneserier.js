// import Box from '../components/Box';
// import Boxes from '../components/Boxes';
import CardsComps from '../components/CardsComps';
// import { StyleDeluxe4, StyleDeluxe2 } from '../styles/Styles';
import ComicsImg from '../images/outland-butikk-comics-edit2.jpg';
import Error404 from '../images/404.jpg';
import MangaStyled from '../styles/MangaCompsStyles';
import ComicStyles from '../styles/HomeCompsStyles';

const Tegneserier = () => (
  <div className="Tegneserier">
    <ComicStyles>
      <img
        src={ComicsImg}
        alt="Outland Butikk comics"
        height="400"
        width="850"
      />
    </ComicStyles>
    <MangaStyled>
      <CardsComps
        title="Card Title"
        imageUrl={Error404}
        body="sdkhgskksdsnsngsng"
      />
      <CardsComps
        title="Card Title"
        imageUrl={Error404}
        body="sdkhgskksdsnsngsng"
      />
    </MangaStyled>
  </div>
);

export default Tegneserier;
