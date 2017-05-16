import React, { Component } from 'react';
import { View, Text} from 'react-native';

class RestaurantList extends Component {
  componentWillMount() {
    console.log('in albumlist');
  }

  render(){
  return(
    <View>
      <Text>Restaurantlist</Text>
    </View>
  );
}
}

export default RestaurantList;
