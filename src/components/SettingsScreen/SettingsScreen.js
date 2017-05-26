import React, { PropTypes } from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});


export default class SettingsScreen extends React.Component {

  static defaultProps = {
    goLogin: () => {},
    logout: () => {},
    isLogin: false,
  };

  static propTypes = {
    goLogin: PropTypes.func,
    logout: PropTypes.func,
    isLogin: PropTypes.bool,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.props.isLogin ?
            <Button
              onPress={this.props.logout}
              title="LogOut" />
          :
            <Button
              onPress={this.props.goLogin}
              title="LogIn" />
        }
      </ScrollView>
    );
  }
}
