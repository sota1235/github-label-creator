/**
 * @fileoverview For background script.
 */

/** @var {boolean} Is the content script always executed. */
let isExecuted = false;

chrome.webNavigation.onHistoryStateUpdated.addListener(() => {
  if (!isExecuted) {
    chrome.tabs.executeScript(null, { file: "dist/index.js"} );
  }

  isExecuted = true;
});
