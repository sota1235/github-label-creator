/**
 * @fileoverview Main file for popup html.
 */

import domready from 'domready';
import { get, put } from './storage';
import { createNewLabels, deleteLabels } from './label-creater';

domready(() => {
  // const issues = get('issues');

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

  $('button.create-labels').on('click', () => {
    deleteLabels();
    createNewLabels(issues);
  });
});
