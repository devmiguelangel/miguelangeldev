import { createGlobalStyle } from 'styled-components';
// Inter Font
import InterThin from '../../assets/fonts/Inter-Thin.ttf';
import InterExtraLight from '../../assets/fonts/Inter-ExtraLight.ttf';
import InterLight from '../../assets/fonts/Inter-Light.ttf';
import InterRegular from '../../assets/fonts/Inter-Regular.ttf';
import InterMedium from '../../assets/fonts/Inter-Medium.ttf';
import InterSemiBold from '../../assets/fonts/Inter-SemiBold.ttf';
import InterBold from '../../assets/fonts/Inter-Bold.ttf';
import InterExtraBold from '../../assets/fonts/Inter-ExtraBold.ttf';
import InterBlack from '../../assets/fonts/Inter-Black.ttf';
// Open Sans font
import OpenSansLight from '../../assets/fonts/OpenSans-Light.ttf';
import OpenSansRegular from '../../assets/fonts/OpenSans-Regular.ttf';
import OpenSansMedium from '../../assets/fonts/OpenSans-Medium.ttf';
import OpenSansSemiBold from '../../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../../assets/fonts/OpenSans-Bold.ttf';
import OpenSansExtraBold from '../../assets/fonts/OpenSans-ExtraBold.ttf';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    src: url(${InterThin});
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    src: url(${InterExtraLight});
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: url(${InterLight});
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: normal;
    src: url(${InterRegular});
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url(${InterMedium});
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: url(${InterSemiBold});
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: url(${InterBold});
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    src: url(${InterExtraBold});
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    src: url(${InterBlack});
  }

  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 300;
    src: url(${OpenSansLight});
  }

  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: normal;
    src: url(${OpenSansRegular});
  }

  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 500;
    src: url(${OpenSansMedium});
  }

  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 600;
    src: url(${OpenSansSemiBold});
  }

  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 700;
    src: url(${OpenSansBold});
  }

  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 800;
    src: url(${OpenSansExtraBold});
  }
`;

export default GlobalFonts;
