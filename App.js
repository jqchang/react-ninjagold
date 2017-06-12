import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

class GameState {
  constructor() {
    this.gold = 0
  }
}

class Statusbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {game:this.props.game}
  }

  render() {
    return(
      <View style={styles.statusbar}>
        <Text>Gold: {this.props.game.gold}</Text>
      </View>
    );
  }
}

class Ninja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {game:this.props.game}
    console.log(this.props.game)
  }
  render() {
    console.log(this.props.name, ":", Number(this.props.min)+Number(this.props.max))
    return (
      <View style={styles.ninja}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.min} to {this.props.max} Gold</Text>
        <Button onPress={() => {
            let gold = Math.floor(Math.random()*(Number(this.props.max)-Number(this.props.min)+1))+Number(this.props.min);
            this.state.game.gold += gold;
            Alert.alert(`You won ${gold} gold at the ${this.props.name}!\nCurrent gold: ${this.state.game.gold}`);
          }
        } title="Visit"></Button>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    game = new GameState();
    this.state = {game:game};
  }

  render() {
    console.log("App.render");
    return (
      <View style={styles.container}>
        <Text>Gold: {this.state.game.gold}</Text>
        <Ninja name='Farm' min="2" max="5" game={this.state.game}/>
        <Ninja name='House' min="5" max="15" game={this.state.game}/>
        <Ninja name='Barn' min="1" max="10" game={this.state.game}/>
        <Ninja name='Casino' min="-50" max="50" game={this.state.game}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusbar: {
    marginTop: 40,
    flex: 0.2,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ninja: {
    flex: 1,
    width: 150,
    backgroundColor: '#ff0',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
