// import Box from '../components/Box';
// import Boxes from '../components/Boxes';
import CardsComps from '../components/CardsComps';
// import { StyleDeluxe4, StyleDeluxe2 } from '../styles/Styles';
import MangaPic from '../images/blogg-banner.jpg';
import MangaStyled from '../styles/MangaCompsStyles';
import { StyleDeluxe5 } from '../styles/Styles';

const Blogg = () => (
  <div className="Blogg">
    <StyleDeluxe5>
      <img src={MangaPic} alt="Epic Blogg banner" height="445" width="850" />
    </StyleDeluxe5>
    <MangaStyled>
      <CardsComps
        title="Card Title"
        imageUrl="../images/itl.cat_night-wallpaper-download_3222220.png"
        body="sdkhgskksdsnsngsng"
      />
      <CardsComps
        title="Card Title"
        imageUrl="../images/itl.cat_night-wallpaper-download_3222220.png"
        body="sdkhgskksdsnsngsng"
      />
      <CardsComps
        title="Card Title"
        imageUrl="../images/itl.cat_night-wallpaper-download_3222220.png"
        body="sdkhgskksdsnsngsng"
      />
      <CardsComps
        title="Card Title"
        imageUrl="../images/ezio-auditore-ray-fredian.jpg"
        body="sdkhgskksdsnsngsng"
      />
    </MangaStyled>
  </div>
);

export default Blogg;
