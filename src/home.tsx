import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform
} from 'react-native';
import { connect, DispatchProp } from 'react-redux';
import { add } from './actions';
import {CounterState} from './statesTypes';

interface State {
}
type Props=CounterState&DispatchProp
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
class Home extends Component<Props, State> {
    constructor(props:Props)
    { 
        super(props);
       
    }
    _add = ()=>{

        this.props.dispatch(add())
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native&typescript!</Text>
                <Text style={styles.instructions}>To get started, edit src/App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Text style={styles.instructions}>{this.props.count}</Text>
                <Button  onPress={this._add}  title="add" ></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  const mapStateToProps = (state:any) => (
    state.counter
)

export default connect(mapStateToProps)(Home);