import { StyleDeluxe1 } from '../styles/Styles';
import ArticleComps from '../styles/ArticleCompsStyles';
import NewsStyles from '../styles/HomeCompsStyles';
import NewsImg from '../images/geeky-wallpaper-banner-edit2.jpg';

const Nyheter = () => (
  <ArticleComps>
    <NewsStyles>
      <img
        src={NewsImg}
        alt="Outland butikk nyheter"
        height="400"
        width="850"
      />
    </NewsStyles>
  </ArticleComps>
);
export default Nyheter;

// Replacing the components (Note: ArticleCompsStyles and StyleDeluxe1 have a huge difference)
