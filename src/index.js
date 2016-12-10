/**
 * @fileoverview Content script for GitHub page.
 */

import domready from 'domready';
import Constants from './constants';
import { createNewLabels, deleteLabels } from './label-creator';

domready(() => {
  chrome.runtime.onMessage.addListener(message => {
    if (message.type !== Constants.CLICK) {
      return;
    }

    if (window.confirm('All labels will be overwritten. Are you OK?')) {
      deleteLabels();
      createNewLabels(message.labels);
    }
  });
});
