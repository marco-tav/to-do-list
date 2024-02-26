import './normalize.css';
import './styles.css';
import './components/header/header-styles.css';
import './components/footer/footer-styles.css';

import createHeader from './components/header/header-dom';
import createFooter from './components/footer/footer-dom';

import PlexSansBold1 from './assets/fonts/IBMPlexSans-Bold.woff';
import PlexSansBold2 from './assets/fonts/IBMPlexSans-Bold.woff2';
import PlexSansSemiBold1 from './assets/fonts/IBMPlexSans-SemiBold.woff';
import PlexSansSemiBold2 from './assets/fonts/IBMPlexSans-SemiBold.woff2';
import PlexSerif1 from './assets/fonts/IBMPlexSerif-Regular.woff';
import PlexSerif2 from './assets/fonts/IBMPlexSerif-Regular.woff2';

createHeader();
createFooter();