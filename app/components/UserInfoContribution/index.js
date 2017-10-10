/**
*
* UserInfoContribution
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class UserInfoContribution extends React.PureComponent {
  render() {
    return (
      <div className="contributionContainer">
        <div className="userInfoContribution">
          <h1>
            <div>How much are you</div>
            <div>interested in investing?</div>
          </h1>
          <span><span className="dollar"></span><input type="number" min="00.00" step="50" placeholder=""/></span>
          <input type="submit" value="Continue" style={{width:"320px"}}/>
        </div>
      </div>
    );
  }
}

UserInfoContribution.contextTypes = {
  router: React.PropTypes.object
};