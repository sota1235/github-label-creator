/**
 * @fileoverview GitHub label creater.
 */

import $ from 'jquery';

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

/**
 * @description Create new labels.
 * @param {array} labels
 */
const createNewLabels = labels => {
  for (let i in labels) {
    const label = labels[i];
    const { name, color } = label;
    createNewLabel(name, color);
  }
};

/**
 * @description Delete all labels.
 */
const deleteLabels = () => {
  // Remove all default labels.
  getDisplayedLabels().each((index, elm) => {
    const deleteIcon   = $(elm).find('.labels-list-action.js-details-target');
    const deleteButton = $(elm).find('.js-delete-label > button');
    // Click delete icon.
    deleteIcon.trigger('click');
    // Click delete label button.
    deleteButton.trigger('click');
  });
};

export default { createNewLabels, deleteLabels }
