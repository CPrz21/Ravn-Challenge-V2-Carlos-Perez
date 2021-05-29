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
    }

    :root {
      --ravn-black: #121212;
      --dark: #333333;
      --light: #828282;
      --emphasis: #EC5757;
      --white: #FFFFFF;
      --gray: #F2F2F2;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'SF Pro Display', sans-serif;
      h2{
        font-size:17px;
        color: var(--dark);
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0.0125em;
        text-align: left;
        margin: 0;
        &.low-emphasis{
          color: var(---light);
        }
        &.high-emphasis{
          color: var(--emphasis)
        }
      }
      p{
        font-size:14px;
        color: var(--dark);
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0.0125em;
        text-align: left;
        margin: 0;
        &.low-emphasis{
          color: var(---light);
        }
      }
      .text-gray{
        color: var(--gray);
      }
      .text-light{
        color: var(--light);
      }
      .container{
        height: 100vh;
        width: 100%;
        overflow: hidden;
        background-color: var(--white);
        .wrapper{
          height: calc(100vh - 52px);
          display: flex;
        }
      }
    }
`;