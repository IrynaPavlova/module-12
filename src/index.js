'use strict';

import './css/styles.css';
import {refs} from './services/refs.js';
import fetch from './components/fetchCountries';
import country from './templates/country.hbs';
import list from './templates/list.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import debounce from 'lodash.debounce';


refs.input.addEventListener(
  'input',
  debounce(event => {
    fetch.fetchCountries(event.target.value)
      .then(data => {
        if (data.length === 1) {
          refs.countries.innerHTML = `${country(data)}`;
        } else if (data.length >= 2 && data.length <= 10) {
          refs.countries.innerHTML = `${list(data)}`;
        } else if(data.length > 10)
          PNotify.error(
            'Too many matches found. Please, enter a more specific query!',
          );
      })
      .catch(error => console.log(error))
  }, 1000),
);