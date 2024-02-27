import './normalize.css';
import './styles.css';

import createHeader from './components/header/header.js';
import './components/header/header-styles.css';

import createFooter from './components/footer/footer.js';
import './components/footer/footer-styles.css';

import PlexSansBold1 from './assets/fonts/IBMPlexSans-Bold.woff';
import PlexSansBold2 from './assets/fonts/IBMPlexSans-Bold.woff2';
import PlexSansSemiBold1 from './assets/fonts/IBMPlexSans-SemiBold.woff';
import PlexSansSemiBold2 from './assets/fonts/IBMPlexSans-SemiBold.woff2';
import PlexSerif1 from './assets/fonts/IBMPlexSerif-Regular.woff';
import PlexSerif2 from './assets/fonts/IBMPlexSerif-Regular.woff2';

createHeader();
createFooter();