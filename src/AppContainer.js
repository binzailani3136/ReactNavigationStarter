import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// import CodePush from 'react-native-code-push';
import MainScreenContainer from './containers/MainScreenContainer';

const store = configureStore();

class AppContainer extends React.Component {
  /* componentDidMount(){
    if (!__DEV__) {
      CodePush.sync({updateDialog:true, installMode: CodePush.InstallMode.ON_NEXT_RESUME});
    }
  }*/
  render() {
    return (
      <Provider store={store}>
        <MainScreenContainer />
      </Provider>
    );
  }
}

// export default CodePush(AppContainer);
export default AppContainer;
