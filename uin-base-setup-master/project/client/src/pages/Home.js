import Kategori from '../components/Kategori';
import Navbar from '../components/navbar/Navigation';
import CardsComps from '../components/CardsComps';
// import MangaStyled from '../styles/MangaCompsStyles';
import { StyleDeluxe5 } from '../styles/Styles';
import PagePic from '../images/xvalhall-samleboks-banner1.jpg';
import horizontalLine from '../images/outland-horizontal-line-edit.png';

/**
 * Home bruker nå komponenten jeg har laget og sender en prop
 */

const Home = () => (
  <>
    <Navbar />
    <StyleDeluxe5>
      <img src={PagePic} height="100%" width="1500" />
    </StyleDeluxe5>
    <Kategori />
    <p>sjkgskgksdegsekgskgskgbk</p>
    <p>sjkgskgksdegsekgskgskgbk</p>
    <p>sjkgskgksdegsekgskgskgbk</p>
    <p>sjkgskgksdegsekgskgskgbk</p>
    <p>sjkgskgksdegsekgskgskgbk</p>
    <p>sjkgskgksdegsekgskgskgbk</p>

    <img src={horizontalLine} alt="Outland horizontal line" width="1500" />
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
  </>
);

export default Home;

/* <StyleDeluxe5>
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
      </MangaStyled>
    </StyleDeluxe5> */
