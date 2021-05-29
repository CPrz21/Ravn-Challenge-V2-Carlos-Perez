import { createGlobalStyle } from 'styled-components';

// Fonts
import SFProDisplayRegularEOT from './fonts/SFProDisplayRegular/SFProDisplayRegular.eot';
import SFProDisplayRegularWOFF2 from './fonts/SFProDisplayRegular/SFProDisplay-Regular.woff2';
import SFProDisplayRegularWOFF from './fonts/SFProDisplayRegular/SFProDisplay-Regular.woff';
import SFProDisplayRegularTTF from './fonts/SFProDisplayRegular/SFProDisplay-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'SF Pro Display';
      src: url(${SFProDisplayRegularEOT});
      src: url(${SFProDisplayRegularEOT + '?#iefix'})
          format('embedded-opentype'),
          url(${SFProDisplayRegularWOFF2})
          format('woff2'),
          url(${SFProDisplayRegularWOFF}) format('woff'),
          url(${SFProDisplayRegularTTF})
          format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    :root {
      --ravn-black: #121212;
      --dark: #333333;
      --light: #828282;
      --emphasis: #EC5757;
      --white: #FFFFFF;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'SF Pro Display', sans-serif;
      .container{
        min-height: 100vh;
        width: 100%;
        overflow: hidden;
        background-color: var(--white);
      }
    }
`;