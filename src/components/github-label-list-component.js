/**
 * @fileoverview Component of GitHub label.
 */

import 'babel-polyfill';
import React from 'react';
import GitHubLabelComponent from './github-label-component';
import { get, put } from '../storage';

class GitHubLabelListComponent extends React.Component {
  /**
   * @description Constructor.
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      labels: [],
    };

    get('labels')
      .then(labels => this.setState({labels}))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <ul className="github-label-list">
        {this.state.labels.map(label =>
          <GitHubLabelComponent
            key={label.name + label.color}
            labelName={label.name}
            labelColor={label.color}
          />
        )}
      </ul>
    );
  }
}

export default GitHubLabelListComponent;
