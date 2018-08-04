import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.buttonPlaceMent}>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View>
              <Ionicons name="ios-trash" size={30} color="red" />
            </View>
          </TouchableOpacity>
          {/* <Button title="Delete" color="red" onPress/> */}

          <TouchableOpacity onPress={props.onModalClosed}>
            <View>
              <Ionicons
                name="ios-close-circle-outline"
                size={30}
                color="black"
              />
            </View>
          </TouchableOpacity>
          {/* <Button title="Close" onPress={props.onModalClosed}/> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonPlaceMent: {
        flexDirection: 'row',
        justifyContent: 'center',
  },
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  alignCent: {
    alignItems: 'center'
  }
});

export default PlaceDetail;
