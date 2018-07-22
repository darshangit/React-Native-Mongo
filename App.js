import React from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import ListItem from "./src/components/ListItem/ListItem";

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ''){
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place}/>
    ));
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput
          placeholder={'An AWesome palce'}
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeinput}
        />
        <Button title="Add" style={styles.placeButton}
        onPress={this.placeSubmitHandler}
        />
      </View>
      <View style={styles.listContainer}>
        {placesOutput}

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeinput: {
    width: '70%'
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});