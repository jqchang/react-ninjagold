import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

class Ninja extends React.Component {
  render() {
    return (
      <View style={styles.ninja}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.min} to {this.props.max} Gold</Text>
        <Button onPress={()=>{this.props.method(this.props.name, this.props.min, this.props.max)}} title="Visit"></Button>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gold:0
    };
  }

  gamble(name, min, max) {
    let gold = Math.floor(Math.random()*(Number(max)-Number(min)+1))+Number(min);
    let currentGold = this.game.state.gold
    this.game.setState({gold:currentGold+gold})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar}>
          <Text>Gold: {this.state.gold}</Text>
        </View>
        <View style={[styles.container, {flexDirection:'row', alignItems:'center'}]}>
          <Ninja name='Farm' min="2" max="5" game={this} method={this.gamble}/>
          <Ninja name='House' min="5" max="15" game={this} method={this.gamble}/>
          <Ninja name='Barn' min="1" max="10" game={this} method={this.gamble}/>
          <Ninja name='Casino' min="-50" max="50" game={this} method={this.gamble}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statusbar: {
    flex: 0.1,
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ninja: {
    flex: 0.5,
    width: '50%',
    flexWrap: 'nowrap',
    backgroundColor: '#ff0',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
