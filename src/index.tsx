import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Platform
} from "react-native";
interface Props {
}
interface State {
    count:number;
}
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
export default class App extends Component<Props, State> {
    constructor(props:Props)
    { 
        super(props);
        this.state={count:0};
       
    }
    add = ()=>{

        this.setState({count:this.state.count+1})
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native&typescript!</Text>
                <Text style={styles.instructions}>To get started, edit src/App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Text style={styles.instructions}>{this.state.count}</Text>
                <Button  onPress={this.add}  title="add" ></Button>
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