import React, { PropTypes } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default class ChatScreen extends React.Component {

  static defaultProps = {
  };

  static propTypes = {
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>ChatScreen</Text>
      </ScrollView>
    );
  }
}
