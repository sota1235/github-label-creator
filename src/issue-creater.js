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

// Remove all default labels.
getDisplayedIssues().each((index, elm) => {
  const deleteIcon   = $(elm).find('.labels-list-action.js-details-target');
  const deleteButton = $(elm).find('.js-delete-label > button');
  // Click delete icon.
  deleteIcon.trigger('click');
  // Click delete label button.
  deleteButton.trigger('click');
});
