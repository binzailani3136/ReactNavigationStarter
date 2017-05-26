import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatScreen from '../components/ChatScreen';
import * as usersActions from '../actions/usersActions';
import _ from 'lodash';

class ChatContainer extends React.Component {
  render() {
    const { forgot, actions, navigation } = this.props;
    return (
      <ChatScreen navigation={navigation} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { forgot: _.get(state, 'forgot') };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // actions: bindActionCreators(Object.assign({}, usersActions), dispatch),
    actions: bindActionCreators(usersActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
