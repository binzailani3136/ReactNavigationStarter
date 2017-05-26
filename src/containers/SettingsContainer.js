import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import _ from 'lodash';

import SettingsScreen from '../components/SettingsScreen';
import * as usersActions from '../actions/usersActions';

class SettingsContainer extends React.Component {
  render() {
    const { login, actions, navigation } = this.props;
    return (
      <SettingsScreen
        goLogin={() => {
          const navigateAction = NavigationActions.navigate({
            routeName: 'Login',
            params: {},
          });
          navigation.dispatch(navigateAction);
        }}
        logout={actions.logout}
        isLogin={_.get(login, 'isLogin')}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { login: _.get(state, 'login') };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // actions: bindActionCreators(Object.assign({}, usersActions), dispatch),
    actions: bindActionCreators(usersActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);

