/**
 * @fileoverview GitHub issue creater.
 */

import $ from 'jquery';

// TODO: check the URL

/**
 * @description Count the issues displayed.
 * @return {$}
 */
const getDisplayedIssues = () => $('.js-details-container.labels-list-item');

/**
 * @description Create new issue.
 * @param {string} labelName
 * @param {string} colorCode
 */
const createNewIssue = (labelName, colorCode = '') => {
  $('.subnav > button').trigger('click');

  $('.label-edit-name').val(labelName);
  if (colorCode !== '') {
    $('.color-editor-input').val(colorCode);
  }

  $('.new-label-actions').find('.btn.btn-primary').trigger('click');
};

// Remove all default labels.
getDisplayedIssues().each((index, elm) => {
  const deleteIcon   = $(elm).find('.labels-list-action.js-details-target');
  const deleteButton = $(elm).find('.js-delete-label > button');
  // Click delete icon.
  deleteIcon.trigger('click');
  // Click delete label button.
  deleteButton.trigger('click');
});
