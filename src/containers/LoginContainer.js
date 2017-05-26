import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import Login from '../components/Login';
import * as usersActions from '../actions/usersActions';

class LoginContainer extends React.Component {
  render() {
    const { login, actions, navigation } = this.props;
    const phone = _.get(login, 'phone');
    const password = _.get(login, 'password');
    return (
      <Login
        login={() => { actions.login(phone, password); }}
        setInputText={actions.loginInputs}
        phone={phone}
        password={password}
        isFetching={_.get(login, 'isFetching')}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { login: _.get(state, 'login') };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // actions: bindActionCreators(Object.assign({}, usersActions), dispatch)
    actions: bindActionCreators(usersActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
