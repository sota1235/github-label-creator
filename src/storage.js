/**
 * @fileoverview Storage for list
 */

/**
 * @description Get data from storage.
 * @param {string} key
 * @return {Promise<mixed|Error>}
 */
const get = key => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get([key], items => {
      resolve(itesm[key]);
    });
  });
};

/**
 * @description Put data to storage.
 * @param {string} key
 * @param {mixed} value
 */
const put = (key, value) => {
  chrome.storage.sync.set({ key: value });
};

export default { get, put };
