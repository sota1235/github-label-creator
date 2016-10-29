/**
 * @fileoverview Main script for popup.html
 */

import $ from 'jquery';
import domready from 'domready';
import Constants from './constants';

domready(() => {
  $('button.create-labels').on('click', () => {
    chrome.runtime.sendMessage(Constants.CLICK);
  });
});
