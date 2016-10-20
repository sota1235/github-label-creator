/**
 * @fileoverview GitHub label creater.
 */

import $ from 'jquery';

// TODO: check the URL

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

/**
 * @description Count the labels displayed.
 * @return {$}
 */
const getDisplayedLabels = () => $('.js-details-container.labels-list-item');

/**
 * @description Create new label.
 * @param {string} labelName
 * @param {string} colorCode
 */
const createNewLabel = (labelName, colorCode = '') => {
  $('.subnav > button').trigger('click');

  $('.label-edit-name').val(labelName);
  if (colorCode !== '') {
    $('.color-editor-input').val(colorCode);
  }

  $('.new-label-actions').find('.btn.btn-primary').trigger('click');
};

// Remove all default labels.
getDisplayedLabels().each((index, elm) => {
  const deleteIcon   = $(elm).find('.labels-list-action.js-details-target');
  const deleteButton = $(elm).find('.js-delete-label > button');
  // Click delete icon.
  deleteIcon.trigger('click');
  // Click delete label button.
  deleteButton.trigger('click');
});

for (let i in labels) {
  const label = labels[i];
  const { name, color } = label;
  createNewLabel(name, color);
}
