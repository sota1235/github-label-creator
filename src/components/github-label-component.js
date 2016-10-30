/**
 * @fileoverview Component of GitHub label.
 */

import React, { PropTypes } from 'react';

const GitHubLabelComponent = ({ labelName, labelColor }) => (
  <li className="github-label-item">
    <div className="github-label" style={{ backgroundColor: labelColor }}>
      <i className="tag icon">{ '  ' + labelName }</i>
    </div>
  </li>
);

GitHubLabelComponent.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
};

export default GitHubLabelComponent;
