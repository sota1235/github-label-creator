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
    /** @var {array} labels - Label list. */
    const labels = [
      {
        name: 'bug',
        color: 'e99695',
      },
      {
        name: 'design',
        color: 'fef2c0',
      },
      {
        name: 'feature',
        color: 'c2e0c6',
      },
      {
        name: 'for development',
        color: 'f9d0c4',
      },
      {
        name: 'improvement',
        color: 'c5def5',
      },
      {
        name: 'incompatible',
        color: 'ffffff',
      },
      {
        name: 'release',
        color: 'd4c5f9',
      },
    ];
    resolve(labels);

    // TODO
    /**
    chrome.storage.sync.get([key], items => {
      resolve(itesm[key]);
    });
    */
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

export { get, put };
