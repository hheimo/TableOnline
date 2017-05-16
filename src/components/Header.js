//Import libraries
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Make a Component
const Header = (props) => {
  return(<View style={styles.header}>
    <Text>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  }
});


//Make the component available to other parts of the App
export default Header;
