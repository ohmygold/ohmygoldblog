import React from 'react';
import {render} from 'react-dom';

import Routers from './routes';
import 'highlight.js/styles/atom-one-light.css';
import './main.css';
import './post.css';
render(<Routers />,document.getElementById('root'));
