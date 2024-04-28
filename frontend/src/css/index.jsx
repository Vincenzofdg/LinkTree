import config from './config.css';

import pn1 from './components/Painel01/index.css';
import pn1_menu from './components/Painel01/menu.css';
import pn1_shapes from './components/Painel01/shapes.css';

import pn1_format from './components/Painel01/subPages/Format.css';
import pn1_link from './components/Painel01/subPages/Link.css';
import pn1_text from './components/Painel01/subPages/Text.css';

import pn2 from './components/Painel02/index.css';
import pn2_bgColor from './components/Painel02/backgroundColor.css';

// import tree from './components/Painel02/index.css';

export default {
     config,
     component: {
          painel01: {
               pn1,
               pn1_menu,
               pn1_shapes,
               subPages: {
                    pn1_format,
                    pn1_link,
                    pn1_text
               }
          },
          painel02: {
               pn2,
               pn2_bgColor,
          },
          // tree
     }
}