import MangaPic from '../images/manga-background-edit.jpg';
import MangaStyles from '../styles/HomeCompsStyles';
import MangaPageStyling from '../styles/MangaPageStyling';

const Manga = () => (
  <MangaStyles>
    <MangaPageStyling>
      <img src={MangaPic} alt="Manga header" height="410" width="665" />;
    </MangaPageStyling>
  </MangaStyles>
);

export default Manga;

/*    <img src={Pic} alt="Pic of sunset" height="400px" />
    <img src={ImgTest} alt="test pic" height="400" /> */
