/**
 * @fileoverview Main script for popup.html
 */

import 'babel-polyfill';
import $ from 'jquery';
import domready from 'domready';
import Constants from './constants';
import { get, put } from './storage';

domready(async () => {
  const labels = await get('labels');

  $('button.create-labels').on('click', () => {
    console.log(labels);
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { type: Constants.CLICK, labels });
    });
  });
});
