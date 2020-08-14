import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import UserContext from '../context/UserContext';

export default class HomeScene extends Component {
  static contextType = UserContext;

  render() {
    const {user, setUser} = this.context;

    return (
      <View>
        <Button
          title="Definir user Italo"
          onPress={() => {
            const newUser = {name: 'Italo', loggedIn: true};
            setUser(newUser);
          }}
        />
        <Text>Usuário atual: {user.name}</Text>
      </View>
    );
  }
}
