import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import TabsNav from '../navigators/TabsNav';

const AppWithNavigationState = ({ dispatch, nav }) => (
  <TabsNav navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
