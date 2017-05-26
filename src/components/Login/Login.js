import React, { PropTypes } from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import Dimensions from 'Dimensions';
import dismissKeyboard from 'dismissKeyboard';

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default class LoginScreen extends React.Component {

  static defaultProps = {
    login: () => {},
    setInputText: () => {},
    isFetching: false,
    phone: '',
    password: '',
  };

  static propTypes = {
    login: PropTypes.func,
    isFetching: PropTypes.bool,
    setInputText: PropTypes.func,
    phone: PropTypes.string,
    password: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.setPhone = this.setPhone.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setPhone(phone) {
    this.props.setInputText({ phone });
  }

  setPassword(password) {
    this.props.setInputText({ password });
  }

  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps={'always'}>
        <TouchableWithoutFeedback onPress={() => { dismissKeyboard(); }}>
          <View style={{ height, flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 30, marginBottom: 20 }}>LogIn</Text>
            <View style={{ flexDirection: 'row', height: 50 }} >
              <Text style={{ flex: 1, marginLeft: 40, height: 50, paddingTop: 20, textAlign: 'center' }}>
                Phone:
              </Text>
              <TextInput
                onChangeText={this.setPhone}
                style={{ flex: 3, height: 50, marginRight: 15 }}
                placeholder={'Please enter phone number'}
                numberOfLines={1}
                value={this.props.phone}
                keyboardType={'numeric'}
                maxLength={11}
                autoFocus
                clearButtonMode={'while-editing'} />
            </View>
            <View style={{ flexDirection: 'row', height: 50 }} >
              <Text style={{ flex: 1, marginLeft: 40, height: 50, paddingTop: 20, textAlign: 'center' }}>
                Password:
              </Text>
              <TextInput
                onChangeText={this.setPassword}
                style={{ flex: 3, height: 50, marginRight: 15 }}
                placeholder={'Please enter your password'}
                numberOfLines={1}
                value={this.props.password}
                secureTextEntry
                clearButtonMode={'while-editing'} />
            </View>
            <View style={{ width: 50, height: 50 }} />
            <Button
              title={this.props.isFetching ? 'Logging in...' : 'Login'}
              onPress={this.props.login}
              style={{ width: 50, height: 50 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}
