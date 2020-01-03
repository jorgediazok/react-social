import React, { Component } from 'react';
import Comments from './Comments';
import UserLogged from './UserLogged';

class Home extends Component {
  render() {
    return (
      <div className="ui container comments">
        <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>
          LAST USERS COMMENTS. JOIN THE CONVERSATION!
        </h4>
        <Comments />
      </div>
    );
  }
}

export default Home;
