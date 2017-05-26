import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import _ from 'lodash';

import HomeScreen from '../components/HomeScreen';
import * as usersActions from '../actions/usersActions';

class HomeContainer extends React.Component {
  render() {
    const { forgot, actions, navigation } = this.props;
    return (
      <HomeScreen
        goHomeDetail={() => {
          const navigateAction = NavigationActions.navigate({
            routeName: 'HomeDetail',
            params: {},
          });
          navigation.dispatch(navigateAction);
        }}
        goPeople={() => {
          const navigateAction = NavigationActions.navigate({
            routeName: 'People',
            params: {},
          });
          navigation.dispatch(navigateAction);
        }}
        goChat={() => {
          const navigateAction = NavigationActions.navigate({
            routeName: 'Chat',
            params: {},
          });
          navigation.dispatch(navigateAction);
        }}
        goSettings={() => {
          const navigateAction = NavigationActions.navigate({
            routeName: 'Settings',
            params: {},
          });
          navigation.dispatch(navigateAction);
        }}
        goExample={(name) => {
          const navigateAction = NavigationActions.navigate({
            routeName: name,
            params: {},
          });
          navigation.dispatch(navigateAction);
        }}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { forgot: _.get(state, 'forgot') };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // actions: bindActionCreators(Object.assign({}, usersActions), dispatch)
    actions: bindActionCreators(usersActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

