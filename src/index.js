/**
 * @fileoverview Content script for GitHub page.
 */

import domready from 'domready';
import Constants from './constants';
import { createNewLabels, deleteLabels } from './label-creater';

domready(() => {
  console.log('js loaded');
  chrome.runtime.onMessage.addListener(message => {
    console.log(message);
    if (message.type === Constants.CLICK) {
      deleteLabels();
      createNewLabels(message.labels);
    }
  });
});
