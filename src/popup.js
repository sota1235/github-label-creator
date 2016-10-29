/**
 * @fileoverview Main script for popup.html
 */

import $ from 'jquery';
import domready from 'domready';
import Constants from './constants';

domready(() => {
  $('button.create-labels').on('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, Constants.CLICK);
    });
  });
});
